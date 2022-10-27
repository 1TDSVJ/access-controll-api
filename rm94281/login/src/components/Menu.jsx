import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem('usuario-validado');
    window.location = '/';
  };

  const usuario = sessionStorage.getItem('usuario-validado');

  return (
    <div>
      <Link to="/">Login</Link> | <Link to="/home">Home</Link> | 
      <Link to="/produto">Produto</Link> |
      <button
        style={usuario ? { display: 'inline' } : { display: 'none' }}
        onClick={logout}>
        {usuario} - Logout
      </button>
    </div>
  );
}
