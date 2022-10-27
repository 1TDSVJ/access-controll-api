import React, { useEffect } from "react";

export default function Home() {
  const verificar = sessionStorage.getItem("usuario-validado");
  const usuario = JSON.parse(sessionStorage.getItem("usuarioObj"));

  useEffect(() => {
    if (verificar == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div>
      Home
      <p>Bem vindo usuário : {usuario.login}</p>
    </div>
  );
}
