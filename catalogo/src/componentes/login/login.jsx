import { useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { getToken } from '../../redux/actions/actionsToкen';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const volverAlCatalogo = () => {
    window.location.href = '/';
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    dispatch(getToken({ username, password }));
  };


  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div style={{'width':'100%','textAlign':'center'}}><p>Solo administradores pueden ingresar.</p></div>
      <div style={{'width':'100%', 'color':'blue', 'textAlign':'center', 'cursor':'pointer'}}onClick={volverAlCatalogo}><p>Estas perdido? vuelve a nuestro catálogo</p>
</div>
    </div>
  );
};

export default Login;
