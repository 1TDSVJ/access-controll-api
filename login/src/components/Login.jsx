import React from 'react'
import { useState } from 'react'

export default function Login() {
    
    const [usuario, setUsuario] = useState({
    login: "",
    senha: "",
    });

    const handleChange = e => {
    setUsuario({...usuario, [e.target.name]: e.target.value });
    }

    const logar = async (e) => {
        e.preventDefault()

        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify(usuario)
        }

        const response = await fetch('http://localhost:8080/ControleAcesso/rest/login/', requestOptions)

        const data = await response.json()

        if(data.login) {
            sessionStorage.setItem('usuario-validado', data.login)
        }

        if (data) {
            window.location.href = '/home'
        } else {        
            window.location.href = '/'
        }




    }
        
  
  
    return (
    <>
        <h1>Login</h1>
        <div>
            <form onSubmit={logar}>
                <fieldset>
                    <legend>Faça seu Login</legend>
                    <div>
                        <label>Usuario</label>
                        <input type="text" name="login" placeholder="Nome Usuário" value={usuario.login}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Usuario</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" value={usuario.senha}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Logar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </>
  )
}
