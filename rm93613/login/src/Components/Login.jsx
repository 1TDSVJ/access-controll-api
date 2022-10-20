import React from 'react';
import { useState } from 'react';

const Login = ()=> {
    
    const [usuario, setUsuario] = useState({
        login : "",
        senha : ""
    });

    const handleChange = (e)=>{
        setUsuario({...usuario, [e.target.name]:e.target.value})
    };

    const logar = async (e)=>{
        e.preventDefault();

        const requestOptions = {
            method : "post",
            headers : { "Content-Type" : "application/json"},
            body: JSON.stringify(usuario)
        };

        const response = await fetch(
            "http://localhost:8080/ControleAcesso/rest/login/",
           requestOptions
        );

        const data = await response.json()

        if(data.login) {
            sessionStorage.setItem("usuario-validado", data.login)
        }

        if (data) {
            window.location = '/home'
        }else {
            window.location = '/'
        }

    }    

    return (
        <>
            <h1>LOGIN</h1>
            <div>
                <form onSubmit={logar}>
                    <fieldset>
                        <legend>Faça seu Login</legend>
                        <div>
                            <label>Usuario</label>
                            <input 
                                type="text" 
                                name="login" 
                                id="login" 
                                placeholder='Digite o seu login' 
                                value={usuario.login} 
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input 
                                type="password" 
                                name="senha" 
                                id="senha" 
                                placeholder='Digite a sua senha' 
                                value={usuario.senha} 
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type='submit'>Logar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default Login;