import styles from './Invitaciones.module.scss';
import Cita from "../plano/Cita.tsx";
import Tiovivo from "../plano/Tiovivo.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Invitaciones() {
    return (<article className={styles.invitaciones} id="_invitaciones">
        <div>
            <header className={`${styles.header} standard-header`}>
                <h3 className="header-title">Invitaciones</h3>
                <h4 className="header-body">cartas perfectas para cada boda</h4>
            </header>
            <Tiovivo></Tiovivo>
            <div style={{height: "8rem"}}></div>
        </div>
        <p>text</p>
        <Interaccion lockTab={"invitaciones"}/>
        <Cita name={"Miguel Rodriguez - Novio"}>Me gusta que</Cita>
    </article>);
}
