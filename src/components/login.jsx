import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmailPassword } from '../slices/auth/loginWithEmailPassword';

export const Login = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(formState.email, formState.password));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={formState.email} onChange={onInputChange} />
      <input type="password" name="password" value={formState.password} onChange={onInputChange} />
      <button type="submit">Login</button>
    </form>
  );
};
