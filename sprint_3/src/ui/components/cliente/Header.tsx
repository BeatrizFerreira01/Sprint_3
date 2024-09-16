import React from 'react';
import './ui/styles/App.css';
import lupaIcon from '../images/lupa.png'
import '../ui/styles/cliente/Header.css';


const Header: React.FC = () => {
    return (
      
        <div className="header-container">

        <div className="header-right">
            <a href="#">Desconectar</a>
        </div>

        <div className="header-center">

            <div className="search-bar">
                <input type="text" placeholder="Pesquisar" />
                <button><img src={lupaIcon} alt="Search" /></button>
            </div>

            <div className="header-links">
                <a href="#">Recomendações</a>
                <a href="#">Suporte</a>
                <a href="#">InovoTech</a>
            </div>

        </div>
        </div>   
    );
};

export default Header;

 