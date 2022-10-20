import React, { useEffect } from 'react';

function Produto() {
    const verificar = sessionStorage.getItem("usuario-validado")

  useEffect(() => {
    if(verificar == null){
        window.location = "/";
    }
  }, []);

  return(
  <div>Produto</div>
  )
}

export default Produto;