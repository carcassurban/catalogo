import './Producto.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarProducto } from '../redux/actions/actionsProductos';

const ProductoEditable = ({ producto }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  codigo = localStorage.getItem("token");

  const eliminar = ()=>{
    dispatch(eliminarProducto(codigo, producto?.id))
    .then(()=>navigate('/carcass-edicion'))
  }
  
  const handleClick = () => {
    navigate(`/carcass-edicion/${producto.id}`);
  };
  return (
    <div>
      <div className="producto-card" style={{'border': `3px solid black`,'borderRadius':'10px','textAlign':' center',
    'width': '90%', 'maxWidth': '300px'}}>
        <img className="producto-img" src={producto.foto} alt='foto1'/>
        <img className="producto-img" src={producto.fotoDorso} alt='foto2'/>
        <p>{producto.nombre}</p>
      <button style={{'border': `none`,'borderRadius':'10px','textAlign':' center','width': '50px','height': '40px', 'color': 'white', 'backgroundColor':'black', 'margin': '5px', 'cursor':'pointer'}}onClick={handleClick}>✏</button>
      <button style={{'border': `none`,'borderRadius':'10px','textAlign':' center','width': '50px','height': '40px', 'color': 'white', 'backgroundColor':'black', 'margin': '5px', 'cursor':'pointer'}} onClick={eliminar}>✖</button>
      </div>
    </div>
  );
};

export default ProductoEditable;
