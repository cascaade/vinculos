import styles from './Ropa.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";

export default function Ropa() {
    return (<article className={styles.ropa}>
        <h3 className={styles.title}>Ropa</h3>
        <header className={styles.header}>encontre tu ropa ideal</header>
        <GaleriaDeImagenes/>
    </article>);
}
