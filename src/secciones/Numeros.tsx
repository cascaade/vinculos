import styles from './Numeros.module.scss';
import Contador from "../componentes/Contador.tsx";

export default function Numeros() {
    return (<section className={styles.numeros}>
        <div className={styles.bodas}>
            <Contador num={164} className={styles.numero} />
            <span>bodas</span>
        </div>
        <div className={styles.sep} />
        <div className={styles.years}>
            <Contador num={8} className={styles.numero} />
            <span>años</span>
        </div>
        <div className={styles.sep} />
        <div className={styles.ciudades}>
            <Contador num={164 * 263 + 164 / 4} className={styles.numero} />
            <span>invitados</span>
        </div>
    </section>);
}