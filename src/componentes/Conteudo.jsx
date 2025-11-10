import estilo from './Conteudo.module.css';
import capa from "../assets/imagens/capa.jpg";

export function Conteudo(){
    return(
    <main className={estilo.container}>
        <h1 className={estilo.titulo}>ダンダダン</h1>
        <img src={capa} className={estilo.img}  alt="" /> 
        {/* <p className={estilo.sinopse}>Sinopse:

Dandadan acompanha a história de Momo Ayase, uma garota do ensino médio que acredita em fantasmas mas não em alienígenas, e Ken Takakura (apelidado de Okarun), seu colega tímido e nerd que acredita em alienígenas, mas acha que fantasmas não existem.

Depois de uma discussão sobre o que é “real”, os dois decidem fazer um teste:

Momo vai a um local famoso por avistamentos de extraterrestres.

Okarun visita um túnel assombrado por espíritos malignos.

O que eles não esperavam é que ambos estivessem errados — e ambos os lados existissem de verdade.

Após esse encontro com o sobrenatural e o alienígena, Momo desperta poderes psíquicos ligados à energia espiritual, enquanto Okarun é possuído por uma entidade demoníaca conhecida como Turbo Granny, ganhando velocidade e força sobre-humanas.

Juntos, eles formam uma dupla improvável que enfrenta seres bizarros, demônios, alienígenas, e outras ameaças, enquanto vivem situações hilárias, emocionantes e às vezes até românticas.
</p>
<p>Temas e Estilo:

O mangá mistura terror, comédia, romance e ficção científica, com arte extremamente detalhada e dinâmica. O ritmo é rápido e cheio de reviravoltas, lembrando obras como Chainsaw Man, mas com um toque mais leve e divertido.
    </p> */}
    </main>
    )
}