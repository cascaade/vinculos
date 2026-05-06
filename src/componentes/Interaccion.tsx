import styles from './Interaccion.module.scss';
import { type ReactNode, useState } from "react";
import {
    comidaItems,
    entretenimientoItems,
    useStore,
    ropaItems,
    type DecoracionColor,
    type DecoracionEstilo,
    type DecoracionLuz,
    type RopaItem
} from "../util/DataStore";

export type InteraccionProps = {
    lockTab?: "invitaciones" | "ropa" | "comida" | "decoraciones" | "entretenimiento",
}

type Role = "novio" | "novia" | "invitados";
type ComidaTipo = "todos" | "entrada" | "plato fuerte" | "postre" | "bebida";

const decoracionEstiloLabels: Record<DecoracionEstilo, string> = {
    romantico: "romántico",
    jardin: "jardín",
    moderno: "moderno"
};

const decoracionColorLabels: Record<DecoracionColor, string> = {
    rosa: "rosa",
    verde: "verde",
    dorado: "dorado"
};

const decoracionLuzLabels: Record<DecoracionLuz, string> = {
    velas: "velas",
    guirnaldas: "guirnaldas",
    candelabros: "candelabros"
};

type SharedCardProps = {
    header: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    draggable?: boolean;
    selected?: boolean;
    onClick?: () => void;
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd?: () => void;
};

function SharedCard({
    header,
    children,
    footer,
    className = "",
    draggable,
    selected,
    onClick,
    onDragStart,
    onDragEnd
}: SharedCardProps) {
    return (
        <div
            className={
                styles.sharedCard + " " +
                (selected ? styles.sharedCardSelected : "") + " " +
                className
            }
            draggable={draggable}
            onClick={onClick}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <div className={styles.sharedCardHeader}>{header}</div>
            <div className={styles.sharedCardBody}>{children}</div>
            {footer && <div className={styles.sharedCardFooter}>{footer}</div>}
        </div>
    );
}

export default function Interaccion({ lockTab }: InteraccionProps) {
    const [currentTab, setCurrentTab] = useState(lockTab ?? "invitaciones");
    const [comidaFiltro, setComidaFiltro] = useState<ComidaTipo>("todos");
    const [draggingRopaId, setDraggingRopaId] = useState<number | null>(null);

    const {
        invData, setInvData,
        filtroTipo, setFiltroTipo,
        filtroColor, setFiltroColor,
        resetFiltros,
        roles, setRoles,
        comidaCart, addComida, removeComida, clearComida,
        decoracion, setDecoracion, toggleDecoracionExtra,
        entretenimiento, toggleEntretenimiento
    } = useStore();

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, role: Role) => {
        e.preventDefault();
        const item: RopaItem = JSON.parse(e.dataTransfer.getData("item"));

        setRoles({
            ...roles,
            [role]: [...roles[role], item]
        });
        setDraggingRopaId(null);
    };

    const removeRoleItem = (role: Role, index: number) => {
        setRoles({
            ...roles,
            [role]: roles[role].filter((_, itemIndex) => itemIndex !== index)
        });
    };

    const renderContent = () => {
        const filtered = ropaItems.filter(item =>
            (filtroTipo.length === 0 || filtroTipo.includes(item.tipo)) &&
            (filtroColor.length === 0 || filtroColor.includes(item.color))
        );
        const filteredComida = comidaItems.filter(item =>
            comidaFiltro === "todos" || item.tipo === comidaFiltro
        );
        const comidaTotal = comidaCart.reduce((total, item) => total + item.precio * item.cantidad, 0);
        const decoracionNames = [
            `Estilo ${decoracionEstiloLabels[decoracion.estilo]}`,
            `Color ${decoracionColorLabels[decoracion.color]}`,
            `Luz de ${decoracionLuzLabels[decoracion.luz]}`,
            ...decoracion.extras
        ];
        const entretenimientoEnergia = entretenimiento.length === 0
            ? 0
            : entretenimiento.reduce((total, item) => total + item.energia, 0) / entretenimiento.length;

        switch (currentTab) {
            case "invitaciones":
                return (
                    <>
                        <div className={styles.mainContent}>
                            <div className={styles.sectionIntro}>
                                <span>Diseño de invitación</span>
                                <h3>Personaliza el primer detalle que verán tus invitados</h3>

                                <div className={styles.inputContainer}>
                                    <input
                                        type="color"
                                        value={invData.bgcolor}
                                        onChange={(e) => setInvData({ bgcolor: e.target.value })}
                                    />
                                    <input
                                        type="color"
                                        value={invData.color}
                                        onChange={(e) => setInvData({ color: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className={styles.invitationStage}>
                                <div
                                    className={styles.invitacion}
                                    style={{ background: invData.bgcolor, color: invData.color }}
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
                        </div>
                    </>
                );
            case "ropa":
                return (
                    <>
                        <div className={styles.mainContent}>
                            <div className={styles.sectionIntro}>
                                <span>Vestuario nupcial</span>
                                <h3>Arrastra cada look a la persona correcta</h3>
                            </div>
                            <div className={styles.filters}>
                                <div className={styles.filtersRow}>
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
                                    <button className={styles.clearButton + " " + ((filtroTipo.length > 0 || filtroColor.length > 0) ? styles.active : "")} onClick={resetFiltros}>
                                        Limpiar filtros
                                    </button>
                                </div>
                            </div>

                            <div className={styles.storeGrid}>
                                {filtered.map(item => (
                                    <SharedCard
                                        key={item.id}
                                        className={styles.ropaCard}
                                        draggable
                                        onDragStart={(e) => {
                                            setDraggingRopaId(item.id);
                                            e.dataTransfer.setData("item", JSON.stringify(item));
                                        }}
                                        onDragEnd={() => setDraggingRopaId(null)}
                                        header={<img className={styles.cardEmoji} src={item.imagen} alt={item.nombre} />}
                                    >
                                        <span className={styles.cardType}>{item.tipo}</span>
                                        <strong>{item.nombre}</strong>
                                        <small>{item.color}</small>
                                    </SharedCard>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sideBar}>
                            {(["novio", "novia", "invitados"] as Role[]).map(role => (
                                <div
                                    key={role}
                                    className={styles.roleBox}
                                >
                                    <div className={styles.sideHeader}>
                                        {role.toUpperCase()}
                                    </div>

                                    <div
                                        className={
                                            styles.roleItems + " " +
                                            (draggingRopaId !== null ? styles.dropReady : "")
                                        }
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => handleDrop(e, role)}
                                    >
                                        {roles[role].length === 0 && (
                                            <span className={styles.dropHint}>Suelta un look aquí</span>
                                        )}
                                        {roles[role].map((item, i) => (
                                            <button
                                                key={`${item.id}-${i}`}
                                                aria-label={`Quitar ${item.nombre}`}
                                                onClick={() => removeRoleItem(role, i)}
                                                title={item.nombre}
                                            >
                                                <img src={item.imagen} alt={item.nombre}></img>
                                            </button>
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
                        <div className={styles.sectionIntro}>
                            <span>Degustación interactiva</span>
                            <h3>Crea un menú que tus invitados van a recordar</h3>
                        </div>

                        <div className={styles.filterGroup}>
                            {(["todos", "entrada", "plato fuerte", "postre", "bebida"] as ComidaTipo[]).map(tipo => (
                                <button
                                    key={tipo}
                                    className={
                                        styles.filterButton + " " +
                                        (comidaFiltro === tipo ? styles.filterActive : "")
                                    }
                                    onClick={() => setComidaFiltro(tipo)}
                                >
                                    {tipo}
                                </button>
                            ))}
                        </div>

                        <div className={styles.storeGrid}>
                            {filteredComida.map(item => (
                                <SharedCard
                                    key={item.id}
                                    className={styles.foodCard}
                                    header={<span className={styles.cardEmoji}>{item.icono}</span>}
                                    footer={
                                        <>
                                            <span>${item.precio} pp</span>
                                            <button onClick={() => addComida(item)}>Agregar</button>
                                        </>
                                    }
                                >
                                        <span className={styles.cardType}>{item.tipo}</span>
                                        <strong>{item.nombre}</strong>
                                        <p>{item.descripcion}</p>
                                </SharedCard>
                            ))}
                        </div>
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Tu menú</div>
                        <p className={styles.sideNote}>Mezcla entradas, platos, postres y bebidas para imaginar la experiencia completa.</p>

                        <div className={styles.cartList}>
                            {comidaCart.length === 0 && (
                                <div className={styles.emptyState}>Elige algo delicioso para empezar.</div>
                            )}

                            {comidaCart.map(item => (
                                <div key={item.id} className={styles.cartItem}>
                                    <span>{item.icono}</span>
                                    <div>
                                        <strong>{item.nombre}</strong>
                                        <small>{item.cantidad} x ${item.precio}</small>
                                    </div>
                                    <button onClick={() => removeComida(item.id)}>-</button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.totalRow}>
                            <span>Total estimado</span>
                            <strong>${comidaTotal} pp</strong>
                        </div>

                        <button className={styles.clearButton + " " + (comidaCart.length > 0 ? styles.active : "")} onClick={clearComida}>
                            Vaciar menú
                        </button>
                    </div>
                </>);
            case "decoraciones":
                return (<>
                    <div className={styles.mainContent}>
                        <div className={styles.sectionIntro}>
                            <span>Taller de ambiente</span>
                            <h3>Diseña tu propio entorno mágico</h3>
                        </div>

                        <div className={
                            styles.decorPreview + " " +
                            styles[`decor-${decoracion.estilo}`] + " " +
                            styles[`color-${decoracion.color}`] + " " +
                            styles[`luz-${decoracion.luz}`]
                        }>
                            <div className={styles.decorArch}></div>
                            <div className={styles.decorTable}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {decoracion.extras.includes("Arco floral") && <div className={styles.extraFlowers}>✿ ✿ ✿</div>}
                            {decoracion.extras.includes("Pista espejo") && <div className={styles.extraDanceFloor}></div>}
                            {decoracion.extras.includes("Rincón de fotos") && <div className={styles.extraPhoto}>Foto</div>}
                        </div>

                        <div className={styles.builderGrid}>
                            <div className={styles.builderGroup}>
                                <h4>Estilo</h4>
                                {(["romantico", "jardin", "moderno"] as DecoracionEstilo[]).map(estilo => (
                                    <button
                                        key={estilo}
                                        className={decoracion.estilo === estilo ? styles.choiceActive : ""}
                                        onClick={() => setDecoracion({ estilo })}
                                    >
                                        {decoracionEstiloLabels[estilo]}
                                    </button>
                                ))}
                            </div>

                            <div className={styles.builderGroup}>
                                <h4>Color</h4>
                                {(["rosa", "verde", "dorado"] as DecoracionColor[]).map(color => (
                                    <button
                                        key={color}
                                        className={decoracion.color === color ? styles.choiceActive : ""}
                                        onClick={() => setDecoracion({ color })}
                                    >
                                        {decoracionColorLabels[color]}
                                    </button>
                                ))}
                            </div>

                            <div className={styles.builderGroup}>
                                <h4>Luz</h4>
                                {(["velas", "guirnaldas", "candelabros"] as DecoracionLuz[]).map(luz => (
                                    <button
                                        key={luz}
                                        className={decoracion.luz === luz ? styles.choiceActive : ""}
                                        onClick={() => setDecoracion({ luz })}
                                    >
                                        {decoracionLuzLabels[luz]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Decoración seleccionada</div>
                        <p className={styles.sideNote}>Estos detalles nos ayudan a preparar una propuesta visual a tu medida.</p>

                        <div className={styles.pillList}>
                            {decoracionNames.map(item => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>

                        <div className={styles.extraList}>
                            {["Arco floral", "Pista espejo", "Rincón de fotos"].map(extra => (
                                <button
                                    key={extra}
                                    className={decoracion.extras.includes(extra) ? styles.extraActive : ""}
                                    onClick={() => toggleDecoracionExtra(extra)}
                                >
                                    {extra}
                                </button>
                            ))}
                        </div>
                    </div>
                </>);
            case "entretenimiento":
                return (<>
                    <div className={styles.mainContent}>
                        <div className={styles.sectionIntro}>
                            <span>Ritmo de la noche</span>
                            <h3>Construye una fiesta con momentos de energía</h3>
                        </div>

                        <div className={styles.timeline}>
                            {["Ceremonia", "Cóctel", "Cena", "Fiesta"].map(momento => (
                                <div key={momento} className={styles.timelineStep}>
                                    <strong>{momento}</strong>
                                </div>
                            ))}
                        </div>

                        <div className={styles.entertainmentGrid}>
                            {entretenimientoItems.map(item => {
                                const selected = entretenimiento.some(selectedItem => selectedItem.id === item.id);

                                return (
                                    <SharedCard
                                        key={item.id}
                                        className={
                                            styles.entertainmentCard
                                        }
                                        selected={selected}
                                        onClick={() => toggleEntretenimiento(item)}
                                        header={<span className={styles.cardEmoji}>{item.icono}</span>}
                                        footer={
                                            <span className={styles.energyDots} aria-label={`Energía ${item.energia} de 5`}>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <i key={index} className={index < item.energia ? styles.dotActive : ""}></i>
                                                ))}
                                            </span>
                                        }
                                    >
                                        <span className={styles.cardType}>{item.tipo}</span>
                                        <strong>{item.nombre}</strong>
                                        <small>{item.descripcion}</small>
                                    </SharedCard>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.sideBar}>
                        <div className={styles.sideHeader}>Plan de entretenimiento</div>
                        <p className={styles.sideNote}>Selecciona actos para ver el pulso de tu celebración.</p>

                        <div className={styles.energyMeter}>
                            <div style={{ height: `${entretenimientoEnergia * 20}%` }}></div>
                        </div>
                        <strong className={styles.energyLabel}>
                            {entretenimientoEnergia === 0 ? "Sin ritmo aún" : `Energía ${Math.round(entretenimientoEnergia)}/5`}
                        </strong>

                        <div className={styles.selectedList}>
                            {entretenimiento.length === 0 && (
                                <div className={styles.emptyState}>Elige música, espectáculos o experiencias.</div>
                            )}

                            {entretenimiento.map(item => (
                                <button key={item.id} onClick={() => toggleEntretenimiento(item)}>
                                    <span>{item.icono}</span>
                                    {item.nombre}
                                </button>
                            ))}
                        </div>
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
                <div className={styles.contentContainer + " " + styles[currentTab]}>
                    {renderContent()}
                </div>
            </div>
        </article>
    );
}
