import { Routes, Route } from "react-router-dom";
import './CatalogoDigital.css';
import logo from "../public/logo.png"
import Catalogo from './vistas/catalogo';
import Edicion from './vistas/edicion';
import AddProducto from "./vistas/addProducto";


const App = () => {
  return (
    <>
    <div className="catalogo-container">
      <header className="header">
        {/* Icono de la marca */}
        <img className="brand-icon" src={logo} alt="Icono de la marca" />
      </header>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/carcass-edicion" element={<Edicion />} />
            <Route path="/carcass-edicion/:id" element={<Edicion />} />
            <Route path="/carcass-nuevoproducto" element={<AddProducto />} />
          </Routes>
    </div>
    </>

  );
};

export default App;
