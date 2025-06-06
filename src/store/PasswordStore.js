import { create } from 'zustand'; 
import { getPasswords } from '../api/passwordApi';

const usePasswordStore = create((set) => ({
  passwords: [],           
  loading: false,          
  error: null,      
  selectedPassword: null,
  setSelectedPassword: (password) => set({ selectedPassword: password }),
  clearSelectedPassword: () => set({ selectedPassword: null }),

   fetchPasswords: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getPasswords();
      set({ passwords: data || [] });
    } catch (err) {
      set({ error: "Error cargando contraseñas: " + err });
    } finally {
      set({ loading: false });
    }
  },
}));

export default usePasswordStore;
