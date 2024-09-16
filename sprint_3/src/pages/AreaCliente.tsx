import '../ui/styles/cliente/AreaCliente.css';
import garagemIcon from '../images/garagem.png'
import visualizarIcon from '../images/olho.png';
import assinaturaIcon from '../images/diamante.png';
import diagnosticoIcon from '../images/prancheta.png';
import agendamentoIcon from '../images/calendario.png';
import agendamentoButton from '../images/sinal_mais.png';
import divisoria from '../images/Line.png';
import usuarioIcon from '../images/boneco.png'

const AreaCliente = () => {
    return (       

    <div className="area-cliente">  
        
        <div className="banner-container">
            
        <div className="circulo-container">
            <div className="circulo">
                <div className="user-info">
                    <img src={usuarioIcon} alt="Usuário" />
                    <h3>Boas Vindas, “nome”</h3>
                    <button className="diagnosticar-btn">Diagnosticar Problema</button>
                    <button className="cadastrar-btn">Cadastrar novo veículo</button>
                </div>
            </div>
        </div>

            <div className="cliente-banner2"></div> 
            <div className="cliente-banner4"></div> 
            <div className="cliente-banner5"></div> 
            <div className="cliente-banner6"></div> 
            <div className="cliente-banner7"></div> 
            <div className="cliente-banner8"></div>
            <div className="cliente-banner9"></div> 
            <div className="cliente-banner10"></div>
            <div className="cliente-banner11"></div>
            <div className="cliente-banner12"></div>
            <div className="cliente-banner13"></div>
            <div className="cliente-banner14"></div>
        </div>

    

        <div className="conteudo-principal">
            <div className="conteudo-secoes">
                <div className="area-garagem">
                    <img src={garagemIcon} alt="Garagem" />
                    <h4>Garagem</h4>
                    <p>Visualize e administre todos os veículos cadastrados dentro de sua Garagem</p>
                    <button className="visualizar-btn" style={{ marginTop: '33px' }}>
                        <img src={visualizarIcon} alt="Visualizar" /> Visualizar
                    </button>
                </div>

                <div className="area-assinaturas">
                    <img src={assinaturaIcon} alt="Assinaturas" />
                    <h4>Assinaturas</h4>
                    <p>Descubra nossos planos de assinatura e aproveite benefícios exlusivos. Escolha o plano ideal para você</p>
                    <div className='separador'>
                        <button className="visualizar-btn-assinatura">
                            Meu Plano
                        </button>
                        <button className="visualizar-btn-2">
                            Planos Disponíveis 
                        </button>
                    </div>
                </div>

                <img src={divisoria}></img>

                <div className="area-diagnostico">
                    <img src={diagnosticoIcon} alt="Garagem" />
                    <h4>Diagnósticos</h4>
                    <p>Clique no botão abaixo para visualizar um resumo detalhado dos seus diagnósticos anteriores</p>
                    <button className="visualizar-btn">
                        <img src={visualizarIcon} alt="Visualizar" /> Visualizar
                    </button>
                </div>
            </div>



            <div className="area-agendamentos">
                <div className="agendamentos-header">
                    <img src={agendamentoIcon} alt="Icone de Agendamento"></img>
                    <div className="agendamentos-text">
                        <h4>Agendamentos</h4>
                        <p>Clique sobre o agendamento para exibir mais detalhes</p>
                    </div>
                </div>
                <div className="agendamentos-list">
                    <div className  ="agendamento-item">
                    <p> </p>
                    <button className="agendamento-btn"><img src={agendamentoButton} alt="Visualizar" /></button>
                </div>
                <div className="agendamento-item">
                    <p> </p>
                    <button className="agendamento-btn"><img src={agendamentoButton} alt="Visualizar" /></button>
                </div>
                <div className="agendamento-item">
                    <p> </p>
                    <button className="agendamento-btn"><img src={agendamentoButton} alt="Visualizar" /></button>
                </div>
                <div className="agendamento-item">
                    <p> </p>
                    <button className="agendamento-btn"><img src={agendamentoButton} alt="Visualizar" /></button>
                </div>
                <div className="agendamento-item">
                    <p> </p>
                    <button className="agendamento-btn"><img src={agendamentoButton} alt="Visualizar" /></button>
                </div>
                </div>
            </div>

        </div>
    </div>
    )    
};

export default AreaCliente;
