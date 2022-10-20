import {React, useEffect} from 'react';

export default function Home(){

    // Verifica se está logado
    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(() => {
        if(verificar == null){
            window.location = "/";
        }
    },[])
    //

    return(
        <div>

            Home
            <p>Bem vindo usuário: {verificar}</p>

        </div>
    );
}