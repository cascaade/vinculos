import styles from './Sonar.module.scss';
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Sonar() {
    return (<article className={styles.sonar}>
        <header className={`${styles.header} standard-header`}>
            <img src={ImageSourceUtil.sonar} alt=""/>
            <h4 className="header-body">planear tu boda soñada</h4>
        </header>
        <p>Valoramos su tiempo y deseamos que el proceso de planificación sea más fácil para usted.</p>
        <p>Le recomendamos que use la selección de atrás para planear su boda soñada. probar muchas combinaciones y explorar los opciones que ofrecemos.</p>
        <Interaccion />
    </article>);
}
