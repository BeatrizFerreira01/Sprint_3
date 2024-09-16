import React from 'react';
import '../../styles/oficina/Banner.css';

const Banner: React.FC = () => {
    return (
        <section className="banner">
            <h1>Boas Vindas ao AutoFix</h1>
            <button>Diagnosticar Problema</button>
        </section>
    );
};

export default Banner;
