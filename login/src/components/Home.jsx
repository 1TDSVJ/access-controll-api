import React from 'react'
import { useEffect } from 'react'

export default function Home() {
    
    const verificar = sessionStorage.getItem('usuario-validado')
    useEffect(() => {
        if(verificar == null){
            window.location.href = '/'
        } 
    }, [])
  
    return (
    <div>Home</div>
  )
}
