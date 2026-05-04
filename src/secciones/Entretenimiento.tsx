import styles from './Entretenimiento.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Entretenimiento() {
    return (<article className={styles.entretenimiento} id="_entretenimiento">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Entretenimiento</h3>
            <h4 className="header-body">Divertido para todos</h4>
        </header>
        <div className={`${styles.videoContainer} standard-content`}>
            <iframe className={styles.video} src={ImageSourceUtil.video} lang={"es"}></iframe>
        </div>
        <GaleriaDeImagenes list={ImageSourceUtil.entretenimiento} />
        <p>Yo niego que alguien este abburido</p>
        <Interaccion lockTab={"entretenimiento"}/>
    </article>);
}
