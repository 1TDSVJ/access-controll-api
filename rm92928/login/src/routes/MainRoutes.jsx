import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Produto from '../components/Produto'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/produto' element={<Produto/>}/>
        </Routes>
    )
}

// o primeiro route vai trava o usuario na pagina de login