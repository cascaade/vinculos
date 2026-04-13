import styles from './Negocio.module.scss';
import Cita from "../plano/Cita.tsx";

export default function Negocio() {
    return (<article className={styles.negocio}>
        <header className={styles.header}>
            <img src="" alt=""/>
            <h3>Sobre Vínculos</h3>
        </header>
        <p>yap yap yap yap yap</p>
        <Cita></Cita>
    </article>);
}
