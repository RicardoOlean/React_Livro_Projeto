import estilo from './Cabecalho.module.css';
import logo from '../assets/imagens/logo.jpg'

export function Cabecalho(){
    return(
        <header className={estilo.cabecalho}>
            <img src={logo} className = {estilo.logo}alt="" />
            {/* <h1 className={estilo.titulo}>DANDADAN </h1> */}
        </header>
    )
}