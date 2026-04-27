import styles from './NavegacionDeServicios.module.scss';
import * as React from "react";

interface NavegacionDeServiciosProps {
    ref?: React.RefObject<HTMLElement | null>
}

export default function NavegacionDeServicios({ ref }: NavegacionDeServiciosProps) {
    return (<nav className={styles.nav} ref={ref}>
        <a className={`logo ${styles.logo}`} href={"#home"}>Vínculos</a>
        <div className={styles.servicios}>
            <a href="#invitaciones">invitaciones</a>
            <a href="#ropa">ropa</a>
            <a href="#comida">comida</a>
            <a href="#decoraciones">decoraciones</a>
            <a href="#entretenimiento">entretenimiento</a>
        </div>
    </nav>);
}
