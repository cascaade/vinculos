import styles from './NavegacionDeServicios.module.scss';

export default function NavegacionDeServicios() {
    return (<nav className={styles.nav}>
        <span className={`logo ${styles.logo}`}>Vínculos</span>
        <div className={styles.servicios}>
            <a href="#invitaciones">invitaciones</a>
            <a href="#ropa">ropa</a>
            <a href="#comida">comida</a>
            <a href="#decoraciones">decoraciones</a>
            <a href="#entretenimiento">entretenimiento</a>
        </div>
    </nav>);
}
