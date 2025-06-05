import React, { useState } from 'react'
import PasswordView from '../components/PasswordView'
import LoginModal from '../modals/Login';
import RegisterModal from '../modals/Register';
import MenuButton from '../components/MenuButton';
import SettingsView from '../components/SettingsView';
import ConfirmButton from '../components/ConfirmButton';
import useAuthStore from '../store/LoginStore';

export default function HomePage() {
    const [activeView, setActiveView] = useState('passwords');
    const { logOut, openLoginModal } = useAuthStore();

    const handleLogOut = () =>{
        logOut();
        openLoginModal();
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
                    <button
                        className='text-white font-bold py-2 px-1 border-2 rounded-2xl border-emerald-400 hover:scale-105 hover:bg-emerald-400'
                        onClick={handleLogOut}
                    >
                        <p>Log Out</p>
                    </button>
                </div>
                <div className="flex-1 h-full mt-5">
                    {activeView === 'passwords' && <PasswordView />}
                </div>
            </div>
           
        </div>
        
    )
}
