import styles from './Hero.module.scss';
import Boton from "../componentes/Boton.tsx";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroFloat}>
                <span className={styles.logo}>Vínculos</span>
                <h1 className={styles.title}>tu boda, <br/>perfectamente imaginada</h1>
                <h3 className={styles.subtitle}>bodas de lujo</h3>
                <Boton fill="main" className={styles.button}>Continuar</Boton>
                <Boton fill="ghost" className={styles.button}>Contáctanos</Boton>
            </div>
        </div>
    );
}
