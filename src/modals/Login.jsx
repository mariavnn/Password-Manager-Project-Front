import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
import PrincipalButton from "../components/PrincipalButton";

export default function LoginModal({handleLogin, handleRegister}) {
    

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
            <div className="w-[30%] h-[70%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-around items-center align-middle px-8 py-3">
                <h2 className="text-white text-3xl font-bold">Login</h2>
                <form method="post" className="w-full">
                    <div className="flex flex-col gap-5">
                        <Input
                            label={"Username"}
                            type={"text"}
                            icon={'user'}
                        />

                        <PasswordInput
                            label={"Password"}
                        />


                    </div>
                    <div className="mt-10">
                       <PrincipalButton
                            label={"Login"}
                            onClick={handleLogin}
                       />
                    </div>
                </form>
                <div className="">
                    <p className="text-gray-300">Don’t have an account? 
                        <button 
                            className="cursor-pointer" 
                            onClick={handleRegister}
                        >
                            <span className="text-zinc-300 underline font-bold"> Register</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
  );
}
