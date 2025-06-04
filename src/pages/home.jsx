import React, { useEffect, useState } from 'react'
import PasswordView from '../components/PasswordView'
import LoginModal from '../modals/Login';
import RegisterModal from '../modals/Register';
import MenuButton from '../components/MenuButton';
import SettingsView from '../components/SettingsView';

export default function HomePage() {
    const [isLogIn, setIsLogIn] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(true);
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [activeView, setActiveView] = useState('passwords');
  

    useEffect(() => {
        if (!isLogIn) {
            setShowModalLogin(true);
        } else {
            setShowModalLogin(false);
        }
    }, [isLogIn]);

    const handleLogin = () => {
        setIsLogIn(true);
        setShowModalLogin(false);
    };

    const handleRegister = () =>{
        setShowModalRegister(true);
        setShowModalLogin(false);
        setIsLogIn(false);
    }

    const closeRegister = () => {
        setShowModalRegister(false);
        setShowModalLogin(true);
    }


    return (
        <div className='bg-zinc-900 h-screen overflow-hidden'>
            <div className="bg-emerald-400 flex gap-6 py-3 px-8 items-center">
                <img src="/src/assets/logo.png"/>
                <h2 className="text-white font-bold text-2xl">PassSafe</h2>
            </div>

            <div className="flex h-[calc(100vh-64px)] overflow-hidden mx-3">
                <div className="w-[15%] min-w-[150px] flex flex-col gap-6 py-16 px-10">
                   <MenuButton
                        label="Passwords"
                        active={activeView === 'passwords'}
                        onClick={() => setActiveView('passwords')}
                    />
                    {/* <MenuButton
                        label="Settings"
                        active={activeView === 'settings'}
                        onClick={() => setActiveView('settings')}
                    /> */}
                </div>
                <div className="flex-1 h-full mt-5">
                    {activeView === 'passwords' && <PasswordView />}
                    {/* {activeView === 'settings' && <SettingsView />} */}
                </div>
            </div>

            {showModalLogin && (
               <LoginModal
                    handleLogin={handleLogin}
                    handleRegister={handleRegister}
               />
            )}

            {showModalRegister && (
                <RegisterModal
                    closeRegister={closeRegister}
                />
            )}

        </div>
        
    )
}
