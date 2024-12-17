import estilos from './rodape.module.css';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import IconeFacebook from '@/../public/facebook.png';
import IconeTwitter from '@/../public/twitter.png';
import IconeLinkedin from '@/../public/linkedin.png';
import IconeDribble from '@/../public/dribble.png';
import IconeBehance from '@/../public/behance.png';
import IconeGooglePlus from '@/../public/google.png';

export default function Rodape(props) {
    return (
        <footer className={props.ehTemaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
            <div className={estilos.container_informacoes}>
                <div>
                    <Image src={Logo} alt='logomarca'/>
                    <p className={estilos.paragrafo}>
                        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                        ferramentas e tecnologias personalizadas.
                    </p>
                </div>
                <div>
                    <Image src={IconeFacebook} alt="facebook"/>
                    <Image src={IconeTwitter} alt="twitter"/>
                    <Image src={IconeLinkedin} alt="linkedin"/>
                    <Image src={IconeDribble} alt="dribble"/>
                    <Image src={IconeBehance} alt="behance"/>
                    <Image src={IconeGooglePlus} alt="google plus"/>
                </div>
            </div>
            <div className={estilos.copyright}>
                <p>Copyright 2022 &copy; <span>Roberth Vieira Santana</span></p>
            </div>
        </footer>
    )
}