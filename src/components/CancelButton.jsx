import React from 'react'

export default function CancelButton({ label, onClick}) {
  return (
   <button
      type="submit"
      onClick={onClick}
      class="bg-gray-400 w-full rounded-2xl py-2 text-white font-bold text-xl cursor-pointer hover:scale-105 "
    >
      {label} 
    </button>
  )
}
