import { create } from 'zustand';
import ImageSourceUtil from "./ImageSourceLookup";

export type RopaItem = {
    id: number;
    nombre: string;
    tipo: string;
    color: string;
    imagen: string;
};

export const ropaItems: RopaItem[] = [
    { id: 1, nombre: "Vestido rosa", tipo: "vestido", color: "rosa", imagen: "" },
    { id: 2, nombre: "Traje negro", tipo: "traje", color: "negro", imagen: "" },
    { id: 3, nombre: "Vestido blanco", tipo: "vestido", color: "blanco", imagen: "" },
    { id: 4, nombre: "Camisa formal", tipo: "camisa", color: "blanco", imagen: "" },
];

for (const item of ropaItems) {
    item.imagen = ImageSourceUtil.ropaItems[item.id - 1];
}

export type ComidaItem = {
    id: number;
    nombre: string;
    tipo: "entrada" | "plato fuerte" | "postre" | "bebida";
    descripcion: string;
    precio: number;
    icono: string;
};

export const comidaItems: ComidaItem[] = [
    {
        id: 1,
        nombre: "Tabla Mediterránea",
        tipo: "entrada",
        descripcion: "Quesos, aceitunas, panes artesanales y frutas frescas.",
        precio: 18,
        icono: "🥖"
    },
    {
        id: 2,
        nombre: "Croquetas de la Casa",
        tipo: "entrada",
        descripcion: "Bocados dorados con jamón serrano, setas y alioli suave.",
        precio: 14,
        icono: "🍽️"
    },
    {
        id: 3,
        nombre: "Salmón con Cítricos",
        tipo: "plato fuerte",
        descripcion: "Salmón glaseado, verduras asadas y salsa de naranja.",
        precio: 34,
        icono: "🍋"
    },
    {
        id: 4,
        nombre: "Filete Jardín Secreto",
        tipo: "plato fuerte",
        descripcion: "Corte tierno con puré trufado y hierbas frescas.",
        precio: 42,
        icono: "🥩"
    },
    {
        id: 5,
        nombre: "Pastel de Vainilla y Rosas",
        tipo: "postre",
        descripcion: "Bizcocho suave, crema de vainilla y pétalos cristalizados.",
        precio: 12,
        icono: "🍰"
    },
    {
        id: 6,
        nombre: "Mesa de Pastelitos",
        tipo: "postre",
        descripcion: "Macarrones franceses, tartaletas, brownies y mini tartas de queso.",
        precio: 16,
        icono: "🧁"
    },
    {
        id: 7,
        nombre: "Cóctel Brindis Dorado",
        tipo: "bebida",
        descripcion: "Champán, durazno, romero y brillo comestible.",
        precio: 11,
        icono: "🥂"
    },
    {
        id: 8,
        nombre: "Barra de Limonadas",
        tipo: "bebida",
        descripcion: "Limonada de fresa, pepino-menta y maracuyá.",
        precio: 9,
        icono: "🍹"
    },
];

export type DecoracionEstilo = "romantico" | "jardin" | "moderno";
export type DecoracionColor = "rosa" | "verde" | "dorado";
export type DecoracionLuz = "velas" | "guirnaldas" | "candelabros";

export type DecoracionData = {
    estilo: DecoracionEstilo;
    color: DecoracionColor;
    luz: DecoracionLuz;
    extras: string[];
};

export type EntretenimientoItem = {
    id: number;
    nombre: string;
    tipo: "música" | "espectáculo" | "experiencia";
    energia: number;
    descripcion: string;
    icono: string;
};

export const entretenimientoItems: EntretenimientoItem[] = [
    {
        id: 1,
        nombre: "Trío Acústico",
        tipo: "música",
        energia: 2,
        descripcion: "Ceremonia emotiva y cóctel elegante con guitarra, violín y voz.",
        icono: "🎻"
    },
    {
        id: 2,
        nombre: "DJ Hora Dorada",
        tipo: "música",
        energia: 5,
        descripcion: "Repertorio personalizado para llenar la pista desde el primer baile.",
        icono: "🎧"
    },
    {
        id: 3,
        nombre: "Cabina 360",
        tipo: "experiencia",
        energia: 4,
        descripcion: "Videos instantáneos para invitados, recuerdos y redes sociales.",
        icono: "📸"
    },
    {
        id: 4,
        nombre: "Espectáculo de Fuego Frío",
        tipo: "espectáculo",
        energia: 5,
        descripcion: "Entrada o primer baile con chispas seguras y efecto sorpresa.",
        icono: "✨"
    },
    {
        id: 5,
        nombre: "Maestro de Juegos",
        tipo: "experiencia",
        energia: 3,
        descripcion: "Dinámicas breves para mezclar mesas y romper el hielo.",
        icono: "🎤"
    },
    {
        id: 6,
        nombre: "Hora Latina",
        tipo: "espectáculo",
        energia: 5,
        descripcion: "Bailarines que activan salsa, bachata y merengue con tus invitados.",
        icono: "💃"
    },
];

type invDataFormat = {
    bgcolor: string;
    titulo: string;
    nombres: string;
    fecha: string;
    lugar: string;
    color: string;
};

type rolesFormat = {
    novio: RopaItem[];
    novia: RopaItem[];
    invitados: RopaItem[];
};

type comidaCartItem = ComidaItem & {
    cantidad: number;
};

type format = {
    invData: invDataFormat;
    setInvData: (data: Partial<invDataFormat>) => void;

    filtroTipo: string[];
    setFiltroTipo: (data: string) => void;

    filtroColor: string[];
    setFiltroColor: (data: string) => void;

    roles: rolesFormat;
    setRoles: (data: rolesFormat) => void;

    comidaCart: comidaCartItem[];
    addComida: (item: ComidaItem) => void;
    removeComida: (id: number) => void;
    clearComida: () => void;

    decoracion: DecoracionData;
    setDecoracion: (data: Partial<DecoracionData>) => void;
    toggleDecoracionExtra: (extra: string) => void;

    entretenimiento: EntretenimientoItem[];
    toggleEntretenimiento: (item: EntretenimientoItem) => void;

    resetFiltros: () => void;
};

export const useStore = create<format>((set) => ({
    invData: {
        titulo: "Nuestra Boda",
        nombres: "Ana & Luis",
        fecha: "12 de Junio, 2027",
        lugar: "Barcelona",
        color: "#685360",
        bgcolor: "#f8c8dc"
    },

    setInvData: (data) =>
        set((state) => ({
            invData: {
                ...state.invData,
                ...data,
            },
        })),

    filtroTipo: [],
    setFiltroTipo: (tipo) =>
        set((state) => ({
            filtroTipo: state.filtroTipo.includes(tipo)
                ? state.filtroTipo.filter(t => t !== tipo)
                : [...state.filtroTipo, tipo]
        })),

    filtroColor: [],
    setFiltroColor: (color) =>
        set((state) => ({
            filtroColor: state.filtroColor.includes(color)
                ? state.filtroColor.filter(c => c !== color)
                : [...state.filtroColor, color]
        })),

    roles: {
        novio: [],
        novia: [],
        invitados: []
    },

    setRoles: (roles) => set({ roles }),

    comidaCart: [],
    addComida: (item) =>
        set((state) => {
            const existing = state.comidaCart.find(cartItem => cartItem.id === item.id);

            if (existing) {
                return {
                    comidaCart: state.comidaCart.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
                            : cartItem
                    )
                };
            }

            return {
                comidaCart: [...state.comidaCart, { ...item, cantidad: 1 }]
            };
        }),
    removeComida: (id) =>
        set((state) => ({
            comidaCart: state.comidaCart
                .map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)
                .filter(item => item.cantidad > 0)
        })),
    clearComida: () => set({ comidaCart: [] }),

    decoracion: {
        estilo: "romantico",
        color: "rosa",
        luz: "velas",
        extras: ["Arco floral"]
    },
    setDecoracion: (data) =>
        set((state) => ({
            decoracion: {
                ...state.decoracion,
                ...data,
            },
        })),
    toggleDecoracionExtra: (extra) =>
        set((state) => ({
            decoracion: {
                ...state.decoracion,
                extras: state.decoracion.extras.includes(extra)
                    ? state.decoracion.extras.filter(item => item !== extra)
                    : [...state.decoracion.extras, extra]
            }
        })),

    entretenimiento: [],
    toggleEntretenimiento: (item) =>
        set((state) => ({
            entretenimiento: state.entretenimiento.some(selected => selected.id === item.id)
                ? state.entretenimiento.filter(selected => selected.id !== item.id)
                : [...state.entretenimiento, item]
        })),

    resetFiltros: () =>
        set(() => ({
            filtroTipo: [],
            filtroColor: []
        })),
}));
