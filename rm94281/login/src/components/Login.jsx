import React, { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState({
    login: '',
    senha: '',
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    };

    const response = await fetch(
      'http://localhost:8080/ControleAcesso/rest/login/',
      requestOptions
    );

    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem('usuario-validado', data.login);
      sessionStorage.setItem('usuarioObj', JSON.stringify(data));
    }

    if (data) {
      window.location = '/home';
    } else {
      window.location = '/';
    }
  };

  return (
    <>
      <h1>LOGIN</h1>
      <div>
        <form onSubmit={logar}>
          <fieldset>
            <legend>Faça seu Login</legend>
            <div>
              <label>Usuário</label>
              <input
                type="text"
                name="login"
                placeholder="Login"
                value={usuario.login}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Logar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
