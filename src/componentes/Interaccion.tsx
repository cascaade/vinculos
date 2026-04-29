import styles from './Interaccion.module.scss';
import {useState} from "react";
import {useStore} from "../util/DataStore.ts";

export type InteraccionProps = {
    lockTab?: "invitaciones" | "ropa" | "comida" | "decoraciones" | "entretenimiento",
}

export default function Interaccion({ lockTab }: InteraccionProps) {
    const [currentTab, setCurrentTab] = useState(lockTab ?? "invitaciones");
    const { invData, setInvData } = useStore();

    const renderContent = () => {
        switch (currentTab) {
            case "invitaciones":
                return (<>
                    <div className={styles.mainContent + " " + styles.invitaciones}>
                        <div
                            className={styles.invitacion}
                            style={{ background: invData.color }}
                        >
                            <h3 contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setInvData({ titulo: e.currentTarget.innerText })}
                            >
                                {invData.titulo}
                            </h3>

                            <h1 contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setInvData({ nombres: e.currentTarget.innerText })}
                            >
                                {invData.nombres}
                            </h1>

                            <p contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setInvData({ fecha: e.currentTarget.innerText })}
                            >
                                {invData.fecha}
                            </p>

                            <p contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setInvData({ lugar: e.currentTarget.innerText })}
                            >
                                {invData.lugar}
                            </p>
                        </div>
                    </div>

                    <div className={styles.bottomBar}>
                        <div className={styles.note}>
                            Personaliza tu invitación ✨
                        </div>

                        <input
                            type="color"
                            value={invData.color}
                            onChange={(e) => setInvData({ color: e.target.value })}
                        />
                    </div>
                </>);
            case "ropa":
                return (<>
                    <div className={styles.mainContent}>
                        clothing store
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.note}>drag the item to the desired role, or search and select with role filters</div>
                    </div>
                </>);
            case "comida":
                return (<>
                    <div className={styles.mainContent}>
                        catering options
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Your order:</div>
                    </div>
                </>);
            case "decoraciones":
                return (<>
                    <div className={styles.mainContent}>
                        decorations
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Selected decorations:</div>
                    </div>
                </>);
            case "entretenimiento":
                return (<>
                    <div className={styles.mainContent}>
                        entertainment options
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Selected entertainment:</div>
                    </div>
                </>);
            default:
                return null;
        }
    };

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
            <div className={styles.contentContainer + " " + currentTab}>{renderContent()}</div>
        </div>
    </article>);
}
