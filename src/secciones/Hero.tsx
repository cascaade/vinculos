import styles from './Hero.module.scss';
import Boton from "../componentes/Boton.tsx";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <span className={styles.logo}>Vínculos</span>
            <h1 className={styles.title}>tu boda, perfectamente imaginada</h1>
            <h3>bodas de lujo</h3>
            <Boton fill="main">Continuar</Boton>
            <Boton fill="ghost">Contáctanos</Boton>
        </div>
    );
}
