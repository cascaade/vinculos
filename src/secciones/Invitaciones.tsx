import styles from './Invitaciones.module.scss';
import Cita from "../plano/Cita.tsx";

export default function Invitaciones() {
    return (<article className={styles.invitaciones}>
        <h3 className={styles.title}>Invitaciones</h3>
        <header className={styles.header}>cartas perfectas para cada boda</header>
        <div className={styles.carousel}>

        </div>
        <Cita></Cita>
    </article>);
}
