import { useState } from 'react';
import './Producto.css';

const Producto = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div className="producto-card" onClick={handleHover} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <img className="producto-img" src={hover ? producto.fotoDorso : producto.foto} alt={producto.nombre} />
      <p>{producto.nombre}</p>
    </div>
  );
};

export default Producto;
