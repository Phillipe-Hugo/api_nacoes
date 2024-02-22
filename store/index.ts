import { create } from "zustand";

interface Store {
  isDarkMode: boolean;
  modoEscolhaEscuro: () => void;
}

export const useStore = create<Store>((set) => ({
  isDarkMode: false,
  modoEscolhaEscuro: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
