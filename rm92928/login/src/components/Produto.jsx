import React, { useEffect } from 'react';
const verificar = sessionStorage.getItem("usuario-validado")
function Produto() {
    useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])
    return (
        <>
            {verificar && (
                <>
                    <h1>Produto</h1>
                </>
            )}
        </>
    );
}
export default Produto;
