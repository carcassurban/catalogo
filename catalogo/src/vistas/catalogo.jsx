import Producto from "../componentes/producto";
import wpp from "../../public/wpp3.png"
import '../CatalogoDigital.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductos } from "../redux/actions/actionsProductos";
import LoadingComponent from "../componentes/loading/loading";

const Catalogo = ()=>{
    // Arreglo de objetos de ejemplo para probar los componentes
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductos())
    },[dispatch])

    const productos = useSelector((state)=>state.productos)
      // Agrega más objetos de producto según sea necesario
    const enlacecontactanos = ()=>{
      //retornar a otro enlace
      window.open("https://wa.me/+5493571346088?text=Hola!%20Vengo%20del%20catálogo%20de%20Carcass%20Urban.%20Estoy%20interesado%20en...");
    }
return(
    <div className="productos-container">
    <h2 className='titulo'>Nuestro Catalogo</h2>
    {productos
      ?productos.map(producto => (
      <Producto key={producto.id} producto={producto} />
    ))
    :(<LoadingComponent />)
    }
    <div className="contactanosdiv" onClick={enlacecontactanos}>
      {/* <p className="contactanosp">¿Ya elegiste tu prenda?</p> */}
      <img className="contactanosicon" src={wpp} alt="wpp" />
    </div>
  </div>
)
}

export default Catalogo;