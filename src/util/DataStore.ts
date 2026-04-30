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

type format = {
    invData: invDataFormat;
    setInvData: (data: Partial<invDataFormat>) => void;

    filtroTipo: string[];
    setFiltroTipo: (data: string) => void;

    filtroColor: string[];
    setFiltroColor: (data: string) => void;

    roles: rolesFormat;
    setRoles: (data: rolesFormat) => void;

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

    resetFiltros: () =>
        set(() => ({
            filtroTipo: [],
            filtroColor: []
        })),
}));
