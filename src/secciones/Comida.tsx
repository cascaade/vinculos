import styles from './Comida.module.scss';
import Logos from "../plano/Logos.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Comida() {
    return (<article className={styles.comida} id="_comida">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Comida</h3>
            <h4 className="header-body">Tu comida favorita en tu boda</h4>
        </header>
        <Logos />
        <p>nuestros patrocinadores & socios</p>

        <p>try</p>
        <Interaccion lockTab={"comida"}/>
    </article>);
}
