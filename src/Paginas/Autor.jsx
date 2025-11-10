import estilo from '../Paginas/Autor.module.css';
import autor from "../assets/imagens/autor.jpg";

export function Autor(){
    return(
        <main>
            <h1 className={estilo.nome}>Yukinobu Tatsu</h1>
            <img  src={autor} className={estilo.autorImg} alt="" />
            <br/>
            <h2 className={estilo.h2}>Biografia</h2>
            <p className={estilo.p}>
                Yukinobu Tatsu é um mangaká japonês conhecido por sua série de sucesso Dandadan.
                Antes de alcançar o estrelato com sua própria obra, 
                ele trabalhou como assistente para mangakás renomados como Tatsuki Fujimoto (Chainsaw Man) e Yuji Kaku (Hell's Paradise). 
                Sua jornada começou com outras obras como Seigi no Rokugou e Fire Ball!, 
                mas foi Dandadan que o lançou ao sucesso internacional, especialmente com sua adaptação para anime. 
            </p>
        </main>
    )
}