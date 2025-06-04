import React from 'react'

export default function ConfirmButton({label, onClick}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      class="border-3 border-emerald-400 w-full rounded-2xl py-2 text-white font-bold text-xl hover:scale-105 cursor-pointer"
    >
      {label} 
    </button>
  )
}
