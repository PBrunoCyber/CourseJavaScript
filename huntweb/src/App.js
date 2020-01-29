import React from 'react';
//NavBar
import Header from './components/Header';
//Estilização geral
import './styles.css';
//Importando o arquivo de rotas
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
