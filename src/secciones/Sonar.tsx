import styles from './Sonar.module.scss';
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Sonar() {
    return (<article className={styles.sonar}>
        <header className={`${styles.header} standard-header`}>
            <img src={ImageSourceUtil.sonar} alt=""/>
            <h4 className="header-body">planea tu boda soñada</h4>
        </header>
        <p>Valoramos tu tiempo y deseamos que el proceso de planificación sea más fácil para ti.</p>
        <p>Te recomendamos que uses la selección de abajo para planear tu boda soñada, probar muchas combinaciones y explorar las opciones que ofrecemos.</p>
        <Interaccion />
    </article>);
}
