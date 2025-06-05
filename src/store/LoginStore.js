import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
}));

export default useAuthStore;