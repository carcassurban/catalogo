import '../CatalogoDigital.css';
import { useDispatch, useSelector } from "react-redux";
import ProductoEditable from '../componentes/productoEditable';
import { useEffect } from 'react';
import { getProductos } from '../redux/actions/actionsProductos';
import Login from '../componentes/login/login';


const Edicion = ()=>{

  const dispatch = useDispatch();
  let codigo = useSelector((state)=>state.token)
  const  codigoStorage = localStorage.getItem("token");
  if (codigoStorage && codigoStorage!== null) {
    codigo = codigoStorage
  }

  useEffect(() => {
    dispatch(getProductos())
  },[dispatch, codigo])
  const productos = useSelector((state)=>state.productos)

  const irACrear = () => {
    window.location.href = '/carcass-nuevoproducto';
  }

    // Almacenar token en localStorage al cambiar
    useEffect(() => {
      if(codigo){
      localStorage.setItem('token', codigo);
      }
    }, [codigo]);

return(
  <div>    
    {codigo
    ?(
      <div className="productos-container">    
      <h1 className='titulo'>Panel de Edicion</h1>
      <div style={{display:'flex', width:'100%', justifyContent:'center', textAlign:'center', alignItems: 'center'}}>
        <button onClick={irACrear} className='addProducto'>Agregar Producto +</button>
      </div>
        {productos?.map(producto => (
          <ProductoEditable  key={producto.id} producto={producto} />
          ))}
      </div>
    )
    :(<div className="productos-container">
      <Login />
      </div>)
    }
      
  </div>
)
}

export default Edicion;