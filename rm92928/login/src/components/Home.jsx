import React, { useEffect } from 'react';

export default function Home() {
    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])
    return (
        <>
            {verificar && (
                <>
                    <h1>Home</h1>
                    <p>Olá {verificar}, seja bem-vindo!</p>
                </>
            )}
        </>
    )
}

