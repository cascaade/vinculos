import { create } from 'zustand';

type invDataFormat = { titulo: string, nombres: string, fecha: string, lugar: string, color: string};
type format = {
    invData: invDataFormat,
    setInvData: (data: Partial<invDataFormat>) => void
}

export const useStore = create((set): format => ({
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
        }))
}));
