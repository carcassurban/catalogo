import { useState } from 'react';
import './nuevoproducto.css';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../loading/loading';
import { postProducto } from '../../redux/actions/actionsProductos';

const NuevoForm = () => {
  const [username, setUsername] = useState('');
  const [fotoPrincipal, setFotoPrincipal] = useState('');
  const [segundaFoto, setSegundaFoto] = useState(null);
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)


  const onFileDropprincipal = async(event) => {
    setLoading(true)
    let img = event.target.files
    const data = new FormData()
    data.append("file", img[0])
    data.append("upload_preset", "ProductosPreset");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drgdvvr2b/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    img = await res.json()
    setFotoPrincipal(img.url)
    setLoading(false)
}

const onFileDropsecundario = async(event) => {
    setLoading2(true)
    let img = event.target.files
    const data = new FormData()
    data.append("file", img[0])
    data.append("upload_preset", "ProductosPreset");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drgdvvr2b/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    img = await res.json()
    setSegundaFoto(img.url)
    setLoading2(false)
}
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const  codigo = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() ||fotoPrincipal===null) {
      setError('Por favor, completa los campos necesarios.');
      return;
    }
    const newData = {
        data:{nombre: username,
        foto: fotoPrincipal,
        fotoDorso: segundaFoto},
        tokenFront: codigo
    }
    dispatch(postProducto(newData));
  };


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
        <h4>nombre</h4>
          <input
            type="text"
            placeholder="Nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
        <h4>foto principal</h4>
        {fotoPrincipal
        ?(<div className="nuevaimagencontenedor"><img className="nuevaimagen" src={fotoPrincipal} alt='foto2' /></div>)
        :(loading
        ?(<LoadingComponent />)
          :(<input
            type="file"
            name='foto1'
            onChange={onFileDropprincipal}
          />))}
        </div>
        <div className="input-group">
        <h4>segunda foto (opcional)</h4>
        {segundaFoto
        ?(<div className="nuevaimagencontenedor"><img className="nuevaimagen" src={segundaFoto} alt='foto2' /></div>)
        :(loading2
        ?(<LoadingComponent />)
          :(<input
            type="file"
            name='foto2'
            onChange={onFileDropsecundario}
          />))}
        </div>
        <button type="submit">crear ✔</button>
      </form>
      
    </div>
  );
};

export default NuevoForm;
