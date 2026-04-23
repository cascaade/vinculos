import styles from './Decoraciones.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Decoraciones() {
    return (<article className={styles.decoraciones} id="_decoraciones">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Decoraciones</h3>
            <h4 className="header-body">Muchos tipos de globos y bandarines</h4>
        </header>
        <GaleriaDeImagenes></GaleriaDeImagenes>
        <Interaccion lockTab={"decoraciones"}/>
    </article>);
}
