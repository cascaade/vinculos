import { create } from 'zustand';

export type RopaItem = {
    id: number;
    nombre: string;
    tipo: string;
    color: string;
    imagen: string;
};

export const ropaItems: RopaItem[] = [
    { id: 1, nombre: "Vestido Rosa", tipo: "vestido", color: "rosa", imagen: "/ropa/vestido1.jpg" },
    { id: 2, nombre: "Traje Negro", tipo: "traje", color: "negro", imagen: "/ropa/traje1.jpg" },
    { id: 3, nombre: "Vestido Blanco", tipo: "vestido", color: "blanco", imagen: "/ropa/vestido2.jpg" },
    { id: 4, nombre: "Camisa Formal", tipo: "camisa", color: "blanco", imagen: "/ropa/camisa1.jpg" },
];

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
        descripcion: "Bocados dorados con jamon serrano, setas y aioli suave.",
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
        nombre: "Filete Jardin Secreto",
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
        descripcion: "Macarons, tartaletas, brownies y mini cheesecakes.",
        precio: 16,
        icono: "🧁"
    },
    {
        id: 7,
        nombre: "Cóctel Brindis Dorado",
        tipo: "bebida",
        descripcion: "Champagne, durazno, romero y brillo comestible.",
        precio: 11,
        icono: "🥂"
    },
    {
        id: 8,
        nombre: "Barra de Limonadas",
        tipo: "bebida",
        descripcion: "Limonada de fresa, pepino-menta y maracuya.",
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
    tipo: "musica" | "show" | "experiencia";
    energia: number;
    descripcion: string;
    icono: string;
};

export const entretenimientoItems: EntretenimientoItem[] = [
    {
        id: 1,
        nombre: "Trío Acústico",
        tipo: "musica",
        energia: 2,
        descripcion: "Ceremonia emotiva y cóctel elegante con guitarra, violín y voz.",
        icono: "🎻"
    },
    {
        id: 2,
        nombre: "DJ Hora Dorada",
        tipo: "musica",
        energia: 5,
        descripcion: "Set personalizado para llenar la pista desde el primer baile.",
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
        nombre: "Show de Fuego Frio",
        tipo: "show",
        energia: 5,
        descripcion: "Entrada o primer baile con chispas seguras y efecto wow.",
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
        tipo: "show",
        energia: 5,
        descripcion: "Bailarines que activan salsa, bachata y merengue con tus invitados.",
        icono: "💃"
    },
];

type invDataFormat = {
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
        color: "#f8c8dc"
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
