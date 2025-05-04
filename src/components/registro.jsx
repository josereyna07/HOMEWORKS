import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../slices/auth/thunks';

export const Registro = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formState;

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(email, password));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Crear cuenta</h2>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Correo electrónico</label><br />
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Contraseña</label><br />
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};
