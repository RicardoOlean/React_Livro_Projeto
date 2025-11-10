import estilo from "../Paginas/Curiosidades.module.css";
// import logo from '../assets/imagens/logo.jpg';
import fundo3 from '../assets/imagens/fundo3.png'


export function Curiosidades() {
    return (
        <main>
            <h1>Curiosidades</h1>
            <img src={fundo3} className={estilo.fundo3} alt="" />
            {/* <img src={logo} className={estilo.logo} alt="" /> */}

        <p className={estilo.texto}>Uma curiosidade sobre Dandadan é que o mangá é publicado digitalmente na plataforma Shonen Jump+ e o autor, Yukinobu Tatsu, se inspirou em obras de terror como Sadako vs. Kayako e filmes de ficção científica B, além de ter estudado 100 mangás shojo para desenvolver a relação entre os protagonistas. A obra é conhecida por sua mistura de horror, comédia e romance, com um estilo que alguns comparam ao de Tatsuki Fujimoto, criador de Chainsaw Man. 
Origem e inspirações
O autor Yukinobu Tatsu se inspirou em filmes de terror como Sadako vs. Kayako e em filmes de ficção científica série B para a criação de Dandadan.
Ele também leu e analisou 100 mangás shojo para desenvolver a relação entre os protagonistas, Mom e Okarun. 
Estilo e temática
A obra é conhecida por misturar terror e comédia de forma única, usando o grotesco e o cômico para criar cenas inusitadas.
A narrativa mistura elementos de ficção científica (aliens) com elementos de terror sobrenatural (espíritos), um contraste que gera situações cômicas e caóticas. 
Adaptação para o anime
A adaptação para anime, produzida pelo estúdio Science Saru, foi muito bem recebida e ajudou a impulsionar a popularidade do mangá no mundo todo.
A abertura do anime, com a música "Otonoke" da banda Creepy Nuts, é repleta de referências a outras obras, como Ultraman e videoclipes de Rihanna e do personagem Carlton Banks de Um Maluco no Pedaço.
         </p>
        </main>

    )
}