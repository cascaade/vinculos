import Boton from "../componentes/Boton";
import styles from './NavegacionDeContacto.module.scss';

export default function NavegacionDeContacto() {
    return (<nav className={styles.nav}>
        <span className={`logo ${styles.logo}`}>Vínculos</span>
        <div className={styles.container}>
            <a href="tel:+1-999-999-9999">(999) 999-9999</a>
            <Boton fill={"ghost"} className={styles.button} href={"#contacto"}>contacta ahora</Boton>
        </div>
    </nav>);
}
