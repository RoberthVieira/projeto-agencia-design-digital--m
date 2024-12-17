import estilos from './Topo.module.css';
import Logo from '@/../public/logo.png';
import IconSol from '@/../public/sun.png';
import IconMoon from '@/../public/moon.png';
import Image from 'next/image';

export default function Topo(props) {
    return(
        <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
            <Image src={Logo} alt='Logomarca' className={estilos.logo}/>
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
                <Image className={estilos.iconesBtn} src={props.ehTemaEscuro ? IconSol : IconMoon} alt='Icone tema'/>
            </button>
        </header>
    )
}