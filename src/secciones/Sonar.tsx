import styles from './Sonar.module.scss';
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Sonar() {
    return (<article className={styles.sonar}>
        <header className={`${styles.header} standard-header`}>
            <img src={ImageSourceUtil.sonar} alt=""/>
            <h4 className="header-body">planear tu boda soñada</h4>
        </header>
        <p>Usar el selecion detras para planear tu boda sonada. probar muchas combinaciones y explorar los opciones que ofrecemos</p>
        <Interaccion />
    </article>);
}
