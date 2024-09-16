import React from 'react';
//import AreaOficina from './pages/AreaOficina';
import AreaCliente from './pages/AreaCliente';
import './ui/styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <AreaCliente />
        </div>
    );
};

export default App;
