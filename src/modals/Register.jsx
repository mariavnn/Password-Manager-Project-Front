import React from 'react'
import Input from '../components/Input'
import PasswordInput from '../components/PasswordInput'
import PrincipalButton from '../components/PrincipalButton'

export default function RegisterModal({ closeRegister }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
         <div className="w-[30%] h-[65%]  border-white border-1 rounded-2xl flex flex-col justify-around items-center align-middle px-8 py-3">
            <h2 className="text-white text-3xl font-bold">Create Account</h2>
            <form method="post" className="w-full">
                <div className="flex flex-col gap-6">
                    <Input
                        label={"Username"}
                        type={"text"}
                        icon={"user"}
                    />

                    <Input
                        label={"Email"}
                        type={"email"}
                        icon={"email"}
                    />

                    <PasswordInput
                        label={"Password"}
                    />

                    <PasswordInput
                        label={"Confirm Password"}
                    />
                    
                </div>
                <div className="mt-10">
                   <PrincipalButton
                        label={"Register"}
                        onClick={closeRegister}
                   />
                </div>
            </form>
        </div>
    </div>
  )
}
