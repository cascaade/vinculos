import styles from './Invitaciones.module.scss';
import Cita from "../plano/Cita.tsx";
import Tiovivo from "../plano/Tiovivo.tsx";

export default function Invitaciones() {
    return (<article className={styles.invitaciones}>
        <div>
            <header className={`${styles.header} standard-header`}>
                <h3 className="header-title">Invitaciones</h3>
                <h4 className="header-body">cartas perfectas para cada boda</h4>
            </header>
            <Tiovivo></Tiovivo>
            <div style={{height: "6rem"}}></div>
        </div>
        <Cita></Cita>
    </article>);
}
