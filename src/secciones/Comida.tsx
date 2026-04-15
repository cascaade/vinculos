import styles from './Comida.module.scss';
import Logos from "../plano/Logos.tsx";

export default function Comida() {
    return (<article className={styles.comida}>
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Comida</h3>
            <h4 className="header-body">Tu comida favorita en tu boda</h4>
        </header>
        <Logos></Logos>
        <p>nuestros patrocinadores & socios</p>
    </article>);
}
