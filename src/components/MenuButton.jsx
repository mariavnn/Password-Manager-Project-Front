import React from "react";

export default function MenuButton({ label, active, onClick }) {
  return (
    <button
      className="flex justify-start focus:outline-none group"
      onClick={onClick}
    >
      <h3
        className={`font-semibold cursor-pointer transition duration-200 transform
          ${active ? 'text-emerald-400 scale-105' : 'text-white'}
          group-focus:text-emerald-400 group-focus:scale-105`}
      >
        {label}
      </h3>
    </button>
  );
}

