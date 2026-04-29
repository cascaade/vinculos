import styles from './Ropa.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Ropa() {
    return (<article className={styles.ropa}>
        <header className={`${styles.header} standard-header`} id="_ropa">
            <h3 className="header-title">Ropa</h3>
            <h4 className="header-body">encontre tu vestido ideal</h4>
        </header>
        <GaleriaDeImagenes list={ImageSourceUtil.ropa}/>
        <Interaccion lockTab={"ropa"}/>
    </article>);
}
