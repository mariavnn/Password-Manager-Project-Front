import React from "react";

export default function PrincipalButton({ onClick, label }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-emerald-400 w-full rounded-2xl py-2 text-white font-bold text-xl"
    >
      {label}
    </button>
  );
}
