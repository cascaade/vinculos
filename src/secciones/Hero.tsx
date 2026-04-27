import styles from './Hero.module.scss';
import Boton from "../componentes/Boton.tsx";

export default function Hero() {
    return (
        <header className={styles.hero} id="_home">
            <div className={styles.heroFloat}>
                <span className={`logo ${styles.logo}`}>Vínculos</span>
                <h1 className={styles.title}>tu boda, <br/>perfectamente imaginada</h1>
                <h3 className={styles.subtitle}>bodas de lujo</h3>
                <Boton fill="main" className={styles.button} href={"#invitaciones"}>Continuar</Boton>
                <Boton fill="ghost" className={styles.button} href="#contacto">Contáctanos</Boton>
            </div>
        </header>
    );
}
