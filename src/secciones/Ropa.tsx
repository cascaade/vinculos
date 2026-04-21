import styles from './Ropa.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Ropa() {
    return (<article className={styles.ropa}>
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Ropa</h3>
            <h4 className="header-body">encontre tu vestido ideal</h4>
        </header>
        <Interaccion lockTab={"ropa"}/>
        <GaleriaDeImagenes/>
    </article>);
}
