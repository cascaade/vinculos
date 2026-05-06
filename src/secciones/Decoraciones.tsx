import styles from './Decoraciones.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";
import Cita from "../plano/Cita.tsx";

export default function Decoraciones() {
    return (<article className={styles.decoraciones} id="_decoraciones">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Decoraciones</h3>
            <h4 className="header-body">Muchos tipos de flores y colores</h4>
        </header>
        <GaleriaDeImagenes list={ImageSourceUtil.decoraciones} />
        <Interaccion lockTab={"decoraciones"}/>
        <Cita name={"someone"}>sfglksdjg</Cita>
    </article>);
}
