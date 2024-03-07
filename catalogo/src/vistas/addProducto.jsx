import '../CatalogoDigital.css';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import NuevoForm from '../componentes/nuevoproducto/nuevoproducto';


const AddProducto = ()=>{

  const dispatch = useDispatch();
  useEffect(() => {
   const  codigo = localStorage.getItem("token");
    if (!codigo || codigo === "null") {
        window.location.href = '/';
    }
  }, [dispatch]);

  const volverAtras = () => {
    window.location.href = '/carcass-edicion';
  }

return(
      <div className="productos-container"> 
      <div style={{'width':'100%', 'color':'black', 'textAlign':'center', 'cursor':'pointer', fontFamily:'Forque'}}onClick={volverAtras}><p>⬅ volver</p></div>
      <h1 className='titulo'>Agrega un Producto</h1>
      <NuevoForm />
      </div>
)
}

export default AddProducto;