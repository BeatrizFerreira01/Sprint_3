import React from 'react';
import '../../styles/oficina/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="logo">
                <img src="logo.png" alt="Logo da Oficina" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className="user-options">
                <button>Desconectar</button>
            </div>
        </header>
    );
};

export default Header;
