import axios from "axios";

export const GET_PRODUCTOS = "GET_PRODUCTOS"
export const GET_PRODUCTO = "GET_PRODUCTO"
const urlServer = "https://catalogo-carcassurban-server.vercel.app/server"


export const getProductos = () => {
    return async function (dispatch){
        const data = await axios.get(`${urlServer}/products`);
        const productos = data.data;
        dispatch({ type: GET_PRODUCTOS, payload: productos });
    };
};

export const postProducto = (newData) => {
    return async function (dispatch){
        try {
            const data = await axios.post(`${urlServer}/products`, newData);
            console.log(data);
            const redireccionar = ()=>{return window.location='/carcass-nuevoproducto'}; 
            //si sale bien pido todo de nuevo
            const data2 = await axios.get(`${urlServer}/products`);
            const productos = data2.data;            
            dispatch({ type: GET_PRODUCTOS, payload: productos });
            alert("¡Producto  creado correctamente!");
            setTimeout(redireccionar(),1500);
            redireccionar()
        } catch (error) {
            console.log(error);
            alert("hubo un error")
        }
    };
}

export const putProducto = (newData, id) => {
    return async function (dispatch){
        try {
            const data = await axios.put(`${urlServer}/products/${id}`, newData);
            console.log(data);
            const redireccionar = ()=>{return window.location='/'}; 
            //si sale bien pido todo de nuevo
            const data2 = await axios.get(`${urlServer}/products`);
            const productos = data2.data;            
            dispatch({ type: GET_PRODUCTOS, payload: productos });
            redireccionar()
        } catch (error) {
            console.log(error);
            alert("hubo un error")
        }
    };
}

export const eliminarProducto = (token, id) => {
    const tokenFront = token;
    return async function (dispatch){
        console.log(token, "id=", id);
        const data = await axios.delete(`${urlServer}/products?id=${id}&tokenFront=${tokenFront}`);
        console.log(data);
        const redireccionar = ()=>{return window.location='/carcass-edicion'}; 
        //si sale bien pido todo de nuevo
        const data2 = await axios.get(`${urlServer}/products`);
        const productos = data2.data;            
        dispatch({ type: GET_PRODUCTOS, payload: productos });
        alert("¡Producto  eliminado correctamente!");
        setTimeout(redireccionar(),1500);
        redireccionar()
        dispatch({ type: GET_PRODUCTO, payload: productos });
    };
};

export const getProductoId = (id) => {
    return async function (dispatch){
        const data = await axios.get(`${urlServer}/products/${id}`);
        const producto = data.data;
        dispatch({ type: GET_PRODUCTO, payload: producto });
    };
};