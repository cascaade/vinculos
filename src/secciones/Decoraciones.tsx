import styles from './Decoraciones.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";

export default function Decoraciones() {
    return (<article className={styles.decoraciones}>
        <h3 className={styles.title}>Decoraciones</h3>
        <header className={styles.header}>Muchos tipos de globos y bandarines</header>
        <GaleriaDeImagenes></GaleriaDeImagenes>
    </article>);
}
