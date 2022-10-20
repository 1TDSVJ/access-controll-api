import React, { useEffect } from 'react';

function Home() {
  
  const verificar = sessionStorage.getItem("usuario-validado")

  useEffect(() => {
    if(verificar == null){
        window.location = "/";
    }
  }, []);
  
    return(
  <div>Home</div>
  )
}

export default Home;