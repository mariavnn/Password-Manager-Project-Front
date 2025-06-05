import React from 'react'

export default function CancelButton({ label, onClick}) {
  return (
   <button
      type="submit"
      onClick={onClick}
      className="bg-gray-400 w-full rounded-2xl py-2.5 px-4 text-white font-bold text-xl cursor-pointer hover:scale-105 "
    >
      {label} 
    </button>
  )
}
