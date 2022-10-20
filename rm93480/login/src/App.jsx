import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Menu from './components/Menu';

export default function App(){
    return(

        <div>
            <h1>Controle Acesso</h1>
            <Menu/>
            <MainRoutes/>
        </div>

    );
}