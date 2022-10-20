import React from 'react';
import Menu from './components/Menu';
import MainRoutes from './routes/MainRoutes';

export default function App() {
  return (
    <>
      <h1>Controle de Acesso</h1>
      <Menu />
      <MainRoutes/>
    </>
  );
}