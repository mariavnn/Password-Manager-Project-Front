import React from 'react'
import PasswordInput from '../components/PasswordInput'
import Input from '../components/Input'
import PrincipalButton from '../components/PrincipalButton'
import CancelButton from '../components/CancelButton'
import ConfirmButton from '../components/ConfirmButton'

export default function AddModal({ closeModal }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
        <div class="w-[30%] h-min-[65%] h-max-[72%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-around px-16 py-5">
            <h2 className="text-white text-2xl font-bold mb-2">Add new Password</h2>
            <form method="post" className="w-full">
                <div className="flex flex-col gap-7">
                    <Input
                        label={"Site"}
                        bgColor='gray'
                    />
                    <Input
                        label={"Username"}
                        bgColor='gray'
                    />
                    <PasswordInput
                        label={"Password"}
                        bgColor='gray'
                    />
                </div>
                <div className="mt-14 flex w-full justify-between px-5">
                    <div className='w-2/5'>
                        <CancelButton
                            label={"Cancel"}
                            onClick={closeModal}
                        />
                    </div>
                   <div className='w-2/5'>
                       <ConfirmButton
                            label={"Save"}
                       />
                    </div>
                </div>
            </form>
            
        </div>
    </div>
  )
}
