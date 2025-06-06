import React, { useEffect, useState } from "react";
import ContainerInfo from "./ContainerInfo";
import AddModal from "../modals/AddModal";
import AccessKeyModal from "../modals/AccessKeyModal";
import EditPassword from "./ConsultPassword";
import ConsultPassword from "./ConsultPassword";
import usePasswordStore from "../store/PasswordStore";
import SessionExpired from "../modals/SessionExpired";
import useAuthStore from "../store/LoginStore";

export default function PasswordView() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAccessKeyModal, setShowAccessKeyModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { setSelectedPassword, passwords, loading, error, fetchPasswords } = usePasswordStore();
  const { token, sessionChecked, isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchPasswords();
    }
  }, [sessionChecked, isLoggedIn, token, fetchPasswords]);


  const handleAddModal = () => setShowAddModal(true);

  const handleHideModal = async () => {
    await fetchPasswords();
    setShowAddModal(false);
  };
  
  const handleShowAccessKeyModal = (pwd) => {
    setShowAccessKeyModal(true);
    setSelectedPassword(pwd);
  };
  const handleHideAccessKeyModal = () => setShowAccessKeyModal(false);

  const handleShowInfoModal = () => {
    setShowAccessKeyModal(false);
    setShowInfoModal(true);
  };
  const handleHideInfoModal = () => setShowInfoModal(false);

  return (
    <div>
      <div className="flex gap-20 items-center">
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">Passwords</h2>
          <p className="text-white mb-6">
            Create, save, and manage your passwords so you can easily sign in to
            sites and apps
          </p>
        </div>
        <button
          onClick={handleAddModal}
          className="rounded-2xl border-2 border-emerald-500 py-2 px-6 cursor-pointer 
                                                    transition-all duration-150 ease-in-out 
                                                    focus:bg-emerald-500 active:bg-emerald-500 
                                                    focus:scale-105 active:scale-105 
                                                    focus:outline-none hover:scale-105 hover:bg-emerald-500"
        >
          <p className="text-white group-focus:text-zinc-900 group-active:text-zinc-900">
            Add
          </p>
        </button>
      </div>

      <div className="overflow-y-scroll pr-6 pb-10 h-[90%]">
        {loading ? (
          <p className="text-white text-center mt-10">Cargando...</p>
        ) : error ? (
          <p className="text-red-500 text-center mt-10">{error}</p>
        ) : (
          <>
            <div className="mb-5">
              <h2 className="font-bold text-zinc-400 mb-2 mr-2">Favorite</h2>
              {passwords.filter(pwd => pwd.favorito === true).length === 0 ? (
                <p className="text-zinc-500 text-center mt-10">No hay contenido disponible.</p>
              ) : (
                passwords
                  .filter(pwd => pwd.favorito === true)
                  .map(pwd => (
                    <ContainerInfo 
                      key={pwd.id} 
                      site={pwd.siteName} 
                      password={pwd} 
                      onClick={() => handleShowAccessKeyModal(pwd)}
                    />
                  ))
              )}
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-zinc-400 mb-2 mr-2">All</h2>
              {passwords.filter(pwd => !pwd.favorito).length === 0 ? (
                <p className="text-zinc-500 text-center mt-10">No hay contenido disponible.</p>
              ) : (passwords
                    .filter(pwd => pwd.favorito === false)
                    .map((pwd) => (
                      <ContainerInfo
                        key={pwd.id}
                        site={pwd.siteName}
                        password={pwd}
                        onClick={() => handleShowAccessKeyModal(pwd)}
                      />
                    )))}
            </div>
          </>
        )}
      </div>

      {showAddModal && <AddModal closeModal={handleHideModal} />}
      {/* {showAddModal && 
        <SessionExpired label={"Your Session has expired"} />
      } */}

      {showAccessKeyModal && (
        <AccessKeyModal
          saveAction={handleShowInfoModal}
          closeModal={handleHideAccessKeyModal}
        />
      )}

      {showInfoModal && <ConsultPassword closeModal={handleHideInfoModal} />}
    </div>
  );
}
