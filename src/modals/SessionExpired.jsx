import React from 'react'
import PrincipalButton from '../components/PrincipalButton'

export default function SessionExpired({label, onClick}) {

    return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
        <div class="w-[30%] h-[30%] bg-zinc-900 border-white border-1 rounded-2xl flex justify-around flex-col p-5">
            <h3 className='text-white font-bold text-xl'>Session Expired</h3>
            <p className='text-white flex justify-center'>{label}</p>
            <div className='w-full flex justify-end'>
                <div className='w-1/3 hover:scale-105'>
                    <PrincipalButton
                        label={"Ok"}
                        onClick={onClick}
                    />
                </div>
              
            </div>
        </div>
    </div>
  )
}
