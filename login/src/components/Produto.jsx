import React, { useEffect } from 'react'

export default function Produto() {
    const verificar = sessionStorage.getItem('usuario-validado')
    
    useEffect(() => {
        if(verificar == null){
            window.location.href = '/'
        } 
    }, [])
  
    return (
    <div>Produto</div>
  )
}
