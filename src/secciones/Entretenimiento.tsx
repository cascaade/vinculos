import styles from './Entretenimiento.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";

export default function Entretenimiento() {
    return (<article className={styles.entretenimiento}>
        <h3 className={styles.title}>Entretenimiento</h3>
        <video src=""></video>
        <GaleriaDeImagenes></GaleriaDeImagenes>
        <header className={styles.header}>Divertido para todos</header>
    </article>);
}
