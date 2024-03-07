import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();


//credentials
const token = "a4e487f3-7ff8-4e55-aa37-532a320ce297";
const username = "carcassurban";
const password = "carcassurban4303";



//rutas productossssss
router.get("/products", async (req, res) => {
	try {
		const products = await prisma.product.findMany();
		console.log("resolvi");
		res.json(products);
	} catch (error) {
		res.json(error);
	}
});

router.post("/products", async (req, res) => {
	try {
		const datosFront = req.body;
		let data = datosFront.data;
		console.log(data);
		const tokenFront = datosFront.tokenFront;
		if (tokenFront === token) {		
			if (!data.fotoDorso) {
				data.fotoDorso = data.foto
			}	
			const product = await prisma.product.create({data});
			res.json(product);
		}else{
			console.log("error");
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});

router.get("/products/:id", async (req, res) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(req.params.id),
		}
	});
	res.json(error);
});

router.delete("/products", async (req, res) => {
	try {
		const {tokenFront} = req.query;
		const {id} = req.query;

		if (tokenFront === token) {			
			const product = await prisma.product.delete({
				where: {
					id: Number(id),
				},
			});
			res.json(product.quantity);
		}else{
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});

router.put("/products/:id", async (req, res) => {
	try {
		const datosFront= req.body;
		const tokenFront = datosFront.tokenFront;
		if (tokenFront === token) {			
			const product = await prisma.product.update({
				where: {
					id: Number(req.params.id),
				},
				data
			});
			res.json(product);		
		}else{
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});


//rutas login
router.post("/login", async (req, res) => {
	try {
		const datos = req.body;
		if (datos.username === username) {		
			if (datos.password === password) {
				res.json(token);
			}else{
				console.log("no pase las pruebas", datos);
				throw new Error("Usuario o contraseña incorrecta")
			}	
		}else{
			console.log("no pase las pruebas", datos);
			throw new Error("Usuario o contraseña incorrecta")
		}
	} catch (error) {
		res.json(null);
	}
});




export default router;
