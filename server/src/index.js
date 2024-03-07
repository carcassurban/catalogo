import express from "express";
import cors from "cors";

import productRoutes from "./routes/products.routes.js";

const app = express();
const corsOptions = {
    origin: 'https://carcass-urban-catalogo.vercel.app'
  };
app.use(cors(corsOptions));
app.use(express.json());

app.use("/server", productRoutes);

app.listen(3000);
console.log("Server on port", 3000);
