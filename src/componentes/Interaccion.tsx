import styles from './Interaccion.module.scss';
import { useState } from "react";
import { useStore, ropaItems, type RopaItem } from "../util/DataStore";

export type InteraccionProps = {
    lockTab?: "invitaciones" | "ropa" | "comida" | "decoraciones" | "entretenimiento",
}

type Role = "novio" | "novia" | "invitados";

export default function Interaccion({ lockTab }: InteraccionProps) {
    const [currentTab, setCurrentTab] = useState(lockTab ?? "invitaciones");

    const {
        invData, setInvData,
        filtroTipo, setFiltroTipo,
        filtroColor, setFiltroColor,
        roles, setRoles,
        resetFiltros
    } = useStore();

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, role: Role) => {
        e.preventDefault();
        const item: RopaItem = JSON.parse(e.dataTransfer.getData("item"));

        setRoles({
            ...roles,
            [role]: [...roles[role], item]
        });
    };

    const renderContent = () => {
        const filtered = ropaItems.filter(item =>
            (filtroTipo.length === 0 || filtroTipo.includes(item.tipo)) &&
            (filtroColor.length === 0 || filtroColor.includes(item.color))
        );

        switch (currentTab) {
            case "invitaciones":
                return (
                    <>
                        <div className={styles.mainContent + " " + styles.invitaciones}>
                            <div
                                className={styles.invitacion}
                                style={{ background: invData.color }}
                            >
                                <h3 contentEditable suppressContentEditableWarning
                                    onBlur={(e) => setInvData({ titulo: e.currentTarget.innerText })}
                                >
                                    {invData.titulo}
                                </h3>

                                <h1 contentEditable suppressContentEditableWarning
                                    onBlur={(e) => setInvData({ nombres: e.currentTarget.innerText })}
                                >
                                    {invData.nombres}
                                </h1>

                                <p contentEditable suppressContentEditableWarning
                                   onBlur={(e) => setInvData({ fecha: e.currentTarget.innerText })}
                                >
                                    {invData.fecha}
                                </p>

                                <p contentEditable suppressContentEditableWarning
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
                    </>
                );

            case "ropa":
                return (
                    <>
                        <div className={styles.mainContent + " " + styles.ropa}>
                            <div className={styles.filters}>
                                <div className={styles.clearRow}>
                                    <div style={{ fontWeight: 500 }}>Filtros</div>

                                    {(filtroTipo.length > 0 || filtroColor.length > 0) && (
                                        <button className={styles.clearButton} onClick={resetFiltros}>
                                            Limpiar filtros
                                        </button>
                                    )}
                                </div>

                                {/* TYPE FILTER */}
                                <div className={styles.filterGroup}>
                                    {["vestido", "traje", "camisa"].map(tipo => (
                                        <button
                                            key={tipo}
                                            className={
                                                styles.filterButton + " " +
                                                (filtroTipo.includes(tipo) ? styles.filterActive : "")
                                            }
                                            onClick={() => setFiltroTipo(tipo)}
                                        >
                                            {tipo}
                                        </button>
                                    ))}
                                </div>

                                {/* COLOR FILTER */}
                                <div className={styles.colorRow}>
                                    {[
                                        { name: "rosa", hex: "#f8c8dc" },
                                        { name: "blanco", hex: "#ffffff" },
                                        { name: "negro", hex: "#000000" },
                                    ].map(color => (
                                        <div
                                            key={color.name}
                                            className={
                                                styles.colorCircle + " " +
                                                (filtroColor.includes(color.name) ? styles.colorSelected : "")
                                            }
                                            style={{ background: color.hex }}
                                            onClick={() => setFiltroColor(color.name)}
                                        />
                                    ))}
                                </div>

                            </div>

                            <div className={styles.storeGrid}>
                                {filtered.map(item => (
                                    <div
                                        key={item.id}
                                        className={styles.card}
                                        draggable
                                        onDragStart={(e) =>
                                            e.dataTransfer.setData("item", JSON.stringify(item))
                                        }
                                    >
                                        <img className={styles.cardImage} src={item.imagen} alt={item.nombre} />
                                        <div className={styles.cardInfo}>
                                            {item.nombre}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sideBar}>
                            {(["novio", "novia", "invitados"] as Role[]).map(role => (
                                <div
                                    key={role}
                                    className={styles.roleBox}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => handleDrop(e, role)}
                                >
                                    <div className={styles.sideHeader}>
                                        {role.toUpperCase()}
                                    </div>

                                    <div className={styles.roleItems}>
                                        {roles[role].map((item, i) => (
                                            <img key={i} src={item.imagen} alt={item.nombre} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
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

    return (
        <article className={styles.interaccion}>
            <div className={styles.panel}>
                {!lockTab && (
                    <nav className={styles.tabBar}>
                        {(["invitaciones", "ropa", "comida", "decoraciones", "entretenimiento"] as const).map(tab => (
                            <a
                                key={tab}
                                className={styles.tab + " " + (currentTab === tab ? styles.active : "")}
                                onClick={() => setCurrentTab(tab)}
                            >
                                {tab}
                            </a>
                        ))}
                    </nav>
                )}
                <div className={styles.contentContainer + " " + currentTab}>
                    {renderContent()}
                </div>
            </div>
        </article>
    );
}
