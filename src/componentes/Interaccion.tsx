import styles from './Interaccion.module.scss';
import {useState} from "react";

export type InteraccionProps = {
    lockTab?: "invitaciones" | "ropa" | "comida" | "decoraciones" | "entretenimiento",
}

export default function Interaccion({ lockTab }: InteraccionProps) {
    const [currentTab, setCurrentTab] = useState(lockTab ?? "invitaciones");

    return (<article className={styles.interaccion}>
        <div className={styles.panel}>
            {!lockTab && (
                <nav className={styles.tabBar}>
                    <a className={styles.tab + " " + (currentTab == "invitaciones" ? styles.active : "")} onClick={() => setCurrentTab("invitaciones")}>Invitaciones</a>
                    <a className={styles.tab + " " + (currentTab == "ropa" ? styles.active : "")} onClick={() => setCurrentTab("ropa")}>Ropa</a>
                    <a className={styles.tab + " " + (currentTab == "comida" ? styles.active : "")} onClick={() => setCurrentTab("comida")}>Comida</a>
                    <a className={styles.tab + " " + (currentTab == "decoraciones" ? styles.active : "")} onClick={() => setCurrentTab("decoraciones")}>Decoraciones</a>
                    <a className={styles.tab + " " + (currentTab == "entretenimiento" ? styles.active : "")} onClick={() => setCurrentTab("entretenimiento")}>Entretenimiento</a>
                </nav>
            )}
            <div className={styles.contentContainer}>
                {lockTab}
                <div className={styles.mainContent}>

                </div>
            </div>
        </div>
    </article>);
}
