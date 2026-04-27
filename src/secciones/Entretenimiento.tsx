import styles from './Entretenimiento.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceUtil.ts";

export default function Entretenimiento() {
    return (<article className={styles.entretenimiento} id="_entretenimiento">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Entretenimiento</h3>
            <h4 className="header-body">Divertido para todos</h4>
        </header>
        <iframe src={ImageSourceUtil.video}></iframe>
        <GaleriaDeImagenes list={ImageSourceUtil.entretenimiento} />
        <Interaccion lockTab={"entretenimiento"}/>
    </article>);
}
