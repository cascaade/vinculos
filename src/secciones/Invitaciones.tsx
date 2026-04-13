import styles from './Invitaciones.module.scss';
import Cita from "../plano/Cita.tsx";
import Tiovivo from "../plano/Tiovivo.tsx";

export default function Invitaciones() {
    return (<article className={styles.invitaciones}>
        <div>
            <header className={styles.header}>
                <h3 className={styles.title}>Invitaciones</h3>
                <h4 className={styles.headerText}>cartas perfectas para <br/>cada boda</h4>
            </header>
            <Tiovivo></Tiovivo>
            <div style={{height: "6rem"}}></div>
        </div>
        <Cita></Cita>
    </article>);
}
