import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Registro } from './components/registro';
import { Login } from './components/login';
import { LoginGoogle } from './components/LoginGoogle';
import { LogoutButton } from './components/LogoutButton';

export default function App() {
  const { email } = useSelector(state => state.auth);

  return (
    <>
      <h1>App de Autenticación</h1>
      {
        email ? (
          <>
            <p>Bienvenido: {email}</p>
            <LogoutButton />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={
              <>
                <Login />
                <LoginGoogle />
                <br />
                <Link to="/registro">¿No tienes cuenta? Regístrate</Link>
              </>
            } />
            <Route path="/registro" element={<Registro />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        )
      }
    </>
  );
}
