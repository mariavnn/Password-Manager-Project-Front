import { create } from 'zustand';

const SESSION_DURATION = 30 * 60 * 1000; // 30 minutos

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  showModalLogin: false,
  showModalRegister: false,
  showSessionExpiredModal: false, 
  sessionChecked: false, 

  checkSession: () => {
    const login = localStorage.getItem("login");
    const loginTimestamp = localStorage.getItem("loginTimestamp");
    const storedToken = localStorage.getItem("token");

    if (login && loginTimestamp && storedToken) {
      const now = Date.now();
      const elapsedTime = now - parseInt(loginTimestamp, 10);

      if (elapsedTime > SESSION_DURATION) {
        localStorage.clear();
        set({
          isLoggedIn: false,
          token: null,
          showSessionExpiredModal: true,  // muestra el modal de sesión expirada
          showModalLogin: false,
          sessionChecked: false,
        });
      } else {
        set({
          isLoggedIn: true,
          token: storedToken,
          showModalLogin: false,
          showSessionExpiredModal: true,
        });
      }
    } else {
      set({
        isLoggedIn: false,
        token: null,
        showModalLogin: true,
        showSessionExpiredModal: false,
        sessionChecked: false,
      });
    }
  },

  logIn: (token) => {
    localStorage.setItem("login", "true");
    localStorage.setItem("loginTimestamp", Date.now().toString());
    localStorage.setItem("token", token);
    set({
      isLoggedIn: true,
      token,
      showModalLogin: false,
      showSessionExpiredModal: false,
    });
  },

  logOut: () => {
    localStorage.clear();
    set({
      isLoggedIn: false,
      token: null,
      showModalLogin: true,
      showSessionExpiredModal: false,
    });
  },

  openLoginModal: () => set({ showModalLogin: true }),
  closeLoginModal: () => set({ showModalLogin: false }),

  openRegisterModal: () => set({ showModalRegister: true, showModalLogin: false }),
  closeRegisterModal: () => set({ showModalRegister: false, showModalLogin: true }),

  openSessionExpiredModal: () => set({ showSessionExpiredModal: true }),
  closeSessionExpiredModal: () => set({ showSessionExpiredModal: false }),
}));

export default useAuthStore;
