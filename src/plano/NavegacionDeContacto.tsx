import Boton from "../componentes/Boton";
import styles from './NavegacionDeContacto.module.scss';
import * as React from "react";

interface NavegacionDeContactoProps {
    ref?: React.RefObject<HTMLElement | null>
}

export default function NavegacionDeContacto({ ref }: NavegacionDeContactoProps) {
    return (<nav className={styles.nav} ref={ref}>
        <a className={`logo ${styles.logo}`} href={"#home"}>Vínculos</a>
        <div className={styles.container}>
            <a href="tel:+1-999-999-9999">(999) 999-9999</a>
            <Boton fill={"ghost"} className={styles.button} href={"#contacto"}>contacta ahora</Boton>
        </div>
    </nav>);
}
