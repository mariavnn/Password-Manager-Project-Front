import { create } from 'zustand'; 

const usePasswordStore = create((set) => ({
  selectedPassword: null,
  setSelectedPassword: (password) => set({ selectedPassword: password }),
  clearSelectedPassword: () => set({ selectedPassword: null }),
}));

export default usePasswordStore;
