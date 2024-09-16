import React from 'react';
import Header from '../ui/components/oficina/Header.tsx';
import Banner from '../ui/components/oficina/Banner.tsx';
import Footer from '../ui/components/oficina/Footer.tsx';

const AreaOficina: React.FC = () => {
    return (
        <div className="area-oficina-container">
            <Header />
            <main>
                <Banner />
                <section className="content-row">
                    <div className="section-card">
                        <h2>Controle de Entrar</h2>
                        <button>Botão 1</button>
                        <button>Botão 2</button>
                    </div>
                    <div className="section-card">
                        <h2>Assinaturas e Agendamentos</h2>
                        <button>Assinaturas</button>
                        <button>Agendamentos</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AreaOficina;
