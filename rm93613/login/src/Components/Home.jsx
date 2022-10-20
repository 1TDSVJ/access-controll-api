import React, { useEffect } from 'react';

const Home = ()=> {

    const verficar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verficar == null) {
            window.location = '/'
        }
    }, []);

  return (
    <>
        <h1>Home</h1>
        <h2>Bem vindo usuário: {verficar}</h2>
    </>
  );
}

export default Home;