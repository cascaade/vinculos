import styles from './Comida.module.scss';
import Logos from "../plano/Logos.tsx";

export default function Comida() {
    return (<article className={styles.comida}>
        <h3 className={styles.title}>Comida</h3>
        <p>nuestros patrocinadores y socios</p>
        <Logos></Logos>
        <header className={styles.header}>Tu comida favorita en tu boda</header>
    </article>);
}
