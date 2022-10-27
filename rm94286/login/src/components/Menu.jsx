import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <div>
      <ul>
        {usuario === null ? (<li>
          <Link to="/">Login</Link>
        </li>) : (<li>
          <button onClick={logout}>{usuario} - Logout</button>
        </li>)}
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/produto">Produto</Link>
        </li>
      </ul>
    </div>
  );
}
