import styles from './Sonar.module.scss';
import Interaccion from "../componentes/Interaccion.tsx";

export default function Sonar() {
    return (<article className={styles.sonar}>
        <header className="standard-header">
            <h4 className="header-body">planear to boda soñada</h4>
        </header>
        <Interaccion />
    </article>);
}
