import {React, useState} from 'react';

export default function Login(){


    // UseState -> get e set do login e senha
    const {usuario,setUsuario} = useSate({
        login: "",
        senha: "",
    });

    // HandleChange -> seta valor do input
    const handleChange = (e) =>{
        setUsuario({...usuario, [e.target.name]:e.target.value});
    };

    // Logar
    const logar = async (e) =>{

        e.preventDefault();

        //Objeto RequestOptions
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(usuario)
        };


        const response = await fetch(
            "http://localhost:8080/ControleAcesso/rest/login",
            requestOptions
        );
        

        const data = await response.json();
        
        if (data.login){
            sessionStorage.setItem("usuario-validado", data.login);
        }

        if (data) {
            window.location = "/home"
        } else {
            window.location = "/"
        }



    };



    return(
        <>
            <h1>Login</h1>
            <div>
                <form onSubmit={logar}>
                    <fieldset>Faça seu Login</fieldset>
                    <div>
                        <label>Usuário</label>
                        <input
                            type="text"
                            name='login' 
                            placeholder='Login' 
                            value={usuario.login} 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            name='senha' 
                            placeholder='Senha' 
                            value={usuario.senha}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button>Logar</button>
                    </div>
                </form>
            </div>
        </>
    );
}