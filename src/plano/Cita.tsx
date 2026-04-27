import styles from './Cita.module.scss';
import type {ReactNode} from "react";

export type CitaProps = {
    children: ReactNode;
    name: string;
}

export default function Cita({ children, name }: CitaProps) {
    return (<div className={styles.cita}>
        <div className={`standard-content ${styles.container}`}>
            <span className={styles.mark}>&ldquo;</span>
            <div className={styles.content}>
                <blockquote className={styles.quote}>{children}</blockquote>
                <hr/>
                <span className={styles.name}>{name}</span>
            </div>
        </div>
    </div>);
}
