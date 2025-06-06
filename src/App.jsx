import { useEffect } from "react";
import HomePage from "./pages/home"
import useAuthStore from "./store/LoginStore";
import SessionExpired from "./modals/SessionExpired";
import LoginModal from "./modals/Login";
import RegisterModal from "./modals/Register";

function App() {
   const {
    checkSession,
    showModalLogin,
    showModalRegister,
    showSessionExpiredModal,
    closeSessionExpiredModal,
    openLoginModal,
    closeLoginModal,
    openRegisterModal, 
    closeRegisterModal
  } = useAuthStore();

  useEffect(() => {
    checkSession(); 
  }, [checkSession]);

  const handleButtonClick = () => {
        closeSessionExpiredModal();
        openLoginModal();
  };

  const handleLoginSuccess = () => {
    closeLoginModal(); 
    console.log("Login exitoso");
  };

  const handleRegister = () => {
    openRegisterModal();
  }

  return (
      <>
        <HomePage/>
        {showSessionExpiredModal && <SessionExpired label={'Your Session has expired. Please Log again'} onClick={handleButtonClick}/>}
        {showModalLogin && <LoginModal handleLogin={handleLoginSuccess} handleRegister={handleRegister}/>}
        {showModalRegister && <RegisterModal closeRegister={closeRegisterModal}/>}
      </>
  )
}

export default App
