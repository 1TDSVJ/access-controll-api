import React, { useEffect } from 'react';

const Produto = ()=> {

    const verficar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verficar == null) {
            window.location = '/'
        }
    }, []);

  return (
    <>
    <h1>Produto</h1>
    </>
  );
}

export default Produto;