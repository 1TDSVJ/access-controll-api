import {React, useEffect} from 'react';

export default function Produto(){

    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(() => {
        if(verificar == null){
            window.location = "/";
        }
    },[])


    return(
        <div>
            <h1>Produto</h1>
        </div>
    );
}