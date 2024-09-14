import "./header.css";

import boneco from "../../assets/boneco.png";
import calendario from "../../assets/calendario.png";
import diamante from "../../assets/diamante.png";
import fundo_cliente from "../../assets/fundo_cliente.png";
import garagem from "../../assets/garagem.png";
import lupa from "../../assets/lupa.png";
import olho from "../../assets/olho.png";
import prancheta from "../../assets/prancheta.png";
import sinal_mais from "../../assets/sinal_mais.png";

function Header() {
  return (
    <body>
    <div className="flex flex-col pb-8 bg-sky-300">
      <div
        className="flex overflow-hidden relative flex-col items-center px-20 pt-7 pb-20 w-full font-bold min-h-[632px] max-md:px-5 max-md:max-w-full"
      >
        <div className="flex relative gap-4 self-end text-xl max-md:flex-wrap">
          <div className="my-auto text-slate-600 text-opacity-80">Desconectar</div>
          <div
            className="flex flex-auto gap-5 justify-center px-7 py-2 whitespace-nowrap bg-white shadow-lg rounded-[70px] text-black text-opacity-80 max-md:px-5"
          >
            <div className="my-auto">Pesquisar
              <img
                loading="lazy"
                src={lupa}
                className="shrink-0 w-9 aspect-square"
              />
            </div>
          </div>
        </div>
        <div
          className="flex relative gap-5 self-end mt-7 mr-11 text-base whitespace-nowrap text-slate-600 text-opacity-80 max-md:mr-2.5"
        >
          <div className="grow">Recomendações</div>
          <div>Suporte</div>
          <div>InovoTech</div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="mt-7 max-w-full aspect-[1.3] w-[122px]"
        />
        <div className="relative mt-8 text-2xl text-slate-600">Boas Vindas, “nome”
        <img
          loading="lazy"
          src={fundo_cliente}
          className="mt-7 max-w-full aspect-[1.3] w-[122px]"
        />
        </div>
        <div
          className="relative justify-center px-5 py-3.5 mt-5 text-xl text-white bg-gray-500 border border-solid border-black border-opacity-40 rounded-[70px] max-md:pr-5"
        >
          Diagnosticar Problema
        </div>
        <div
          className="relative justify-center px-3 py-4 mt-4 mb-24 text-sm text-black bg-white border border-solid border-black border-opacity-60 rounded-[70px] max-md:mb-10"
        >
          Cadastrar novo veículo
        </div>
      </div>
      <div
        className="self-center px-5 mt-12 w-full max-w-[1311px] max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div
              className="flex gap-4 justify-between items-start max-md:flex-wrap max-md:mt-10"
            >
              <div className="flex flex-col mt-4 font-bold text-slate-600 bgs">
                <img
                  width="100"
                  height="100"
                  loading="lazy"
                  src={boneco}
                  className="self-center rounded-full border-2 border-solid aspect-square border-slate-800 border-opacity-50 w-[85px]"
                />
                <div className="self-center mt-4 text-xl">Garagem</div>
                <img
                  loading="lazy"
                  src={garagem}
                  className="shrink-0 w-9 aspect-square"
                />
                <div className="mt-4 text-sm text-cyan-900">
                  Visualize e administre todos os veículos
                  <br />
                  cadastrados na sua garagem
                  <br />
                </div>
                <div
                  className="flex gap-2 items-start px-5 py-5 mt-11 text-xs whitespace-nowrap rounded-3xl border border-solid shadow-sm border-black border-opacity-40 max-md:px-5 max-md:mt-10"
                >
                  <div className="flex-auto my-auto">Visualizar</div>
                  <img
                    loading="lazy"
                    src={olho}
                    className="shrink-0 w-9 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-center border-2 border-solid aspect-square border-slate-800 border-opacity-50 fill-[url(<path-to-image>)_lightgray_-5.681px_1.773px_/_116.288%_100%_no-repeat] stroke-[2px] stroke-slate-800 stroke-opacity-50 w-[85px]"
                />
                <div className="self-center mt-4 text-xl font-bold text-slate-600">
                  Assinaturas
                </div>
                <img
                  loading="lazy"
                  src={diamante}
                  className="shrink-0 w-9 aspect-square"
                />
                <div className="mx-6 mt-5 text-sm text-cyan-900 max-md:mx-2.5">
                  Descubra nossos planos de assinatura e
                  <br />
                  aproveite benefícios exclusivos. Escolha o
                  <br />
                  plano ideal para você:
                </div>
                <div className="flex gap-5 justify-between mt-7">
                  <div
                    className="justify-center px-6 py-5 text-xs font-bold rounded-3xl border border-solid shadow-sm border-black border-opacity-40 text-slate-600 max-md:px-5"
                  >
                    Meu Plano
                  </div>
                  <div
                    className="justify-center self-start px-2.5 py-4 text-sm text-center capitalize bg-gray-500 rounded-3xl shadow-sm mix-blend-luminosity text-slate-200"
                  >
                    Planos Disponíveis
                  </div>
                </div>
              </div>
              <div
                className="shrink-0 self-stretch w-px bg-black border border-black border-solid h-[280px]"
              ></div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div
              className="flex flex-col self-stretch my-auto font-bold text-slate-600 max-md:mt-10"
            >
              <img
                loading="lazy"
                srcSet="..."
                className="self-center border-2 border-solid aspect-square border-slate-800 border-opacity-50 fill-[url(<path-to-image>)_lightgray_-8.866px_0px_/_123.214%_100%_no-repeat] stroke-[2px] stroke-slate-800 stroke-opacity-50 w-[85px]"
              />
              <div className="self-center mt-4 text-xl">Diagnósticos</div>
              <img
                loading="lazy"
                src={prancheta}
                className="shrink-0 w-9 aspect-square"
              />
              <div className="mt-4 text-sm text-cyan-900">
                Clique no botão abaixo para visualizar um resumo detalhado dos seus
                diagnósticos realizados
              </div>
              <div
                className="flex gap-2 items-start px-6 py-5 mt-6 text-xs whitespace-nowrap rounded-3xl border border-solid shadow-sm border-black border-opacity-40 max-md:px-5"
              >
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start aspect-[1.47] w-[19px]"
                />
                <div className="flex-auto my-auto">Visualizar</div>
                <img
                  loading="lazy"
                  src={olho}
                  className="shrink-0 w-9 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 mt-1.5 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="flex gap-0.5">
                  <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 rounded-full border-2 border-solid aspect-square border-slate-800 border-opacity-50 w-[85px]"
                    />
                  <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                    <div className="text-xl font-bold text-slate-600">Agendamentos</div>
                    <img
                      loading="lazy"
                      src={calendario}
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="mt-4 text-sm text-cyan-900">
                      Clique sobre o agendamento para exibir mais detalhes</div>
                    <img
                      loading="lazy"
                      src={sinal_mais}
                      className="shrink-0 w-9 aspect-square"
                    />
                  </div>
                </div>
                <div
                  className="flex gap-0 justify-end items-start py-5 pr-8 pl-20 mt-3.5 border-0 border-black border-solid shadow-sm rounded-[70px] max-md:px-5"
                >
                  <div
                    className="z-10 shrink-0 my-auto bg-blue-950 h-[5px] w-[21px]"
                  ></div>
                  <div
                    className="shrink-0 self-start bg-blue-950 h-[21px] w-[5px]"
                  ></div>
                </div>
                <div
                  className="flex gap-0 justify-end items-start py-5 pr-8 pl-20 mt-3 border-0 border-black border-solid shadow-sm rounded-[70px] max-md:px-5"
                >
                  <div
                    className="z-10 shrink-0 my-auto bg-blue-950 h-[5px] w-[21px]"
                  ></div>
                  <div
                    className="shrink-0 self-start bg-blue-950 h-[21px] w-[5px]"
                  ></div>
                </div>
                <div
                  className="flex flex-col justify-end items-end py-6 pr-6 pl-20 mt-3.5 border-0 border-black border-solid shadow-sm rounded-[70px] max-md:px-5"
                >
                  <div className="shrink-0 bg-blue-950 h-[15px] w-[22px]"></div>
                  <div className="shrink-0 bg-blue-950 h-[5px] w-[22px]"></div>
                </div>
              </div>
              <div
                className="flex flex-col self-start px-4 pt-12 pb-5 mt-5 rounded-[70px]"
              >
                <div className="shrink-0 bg-neutral-300 h-[61px]"></div>
                <div
                  className="shrink-0 mt-32 bg-white rounded-full h-[15px] w-[15px] max-md:mt-10"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
    </script>
  </body>
  )
}

export default Header;