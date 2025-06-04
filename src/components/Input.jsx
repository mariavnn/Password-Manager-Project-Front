import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Input({ label, type = 'text', icon, bgColor = 'white', disabled}) {
  const typeIcon = (icon) => {
    switch (icon) {
      case 'email':
        return <MdEmail className="text-zinc-500"/>
      case 'user':
        return <FaUser className="text-zinc-500" />
      default:
        return ''; // No icon
    }
  };

  const backgroundClass = bgColor === 'gray' ? 'bg-zinc-700/70' : 'bg-white';
  const iconSrc = typeIcon(icon);

  return (
    <div>
      <label htmlFor="uname" className="block text-gray-300 mb-1 font-medium">
        {label}
      </label>
      <div className={`flex items-center ${backgroundClass} rounded-xl p-2 focus-within:ring-2 focus-within:ring-green-200`}>
        <input
          type={type}
          name="uname"
          id="uname"
          placeholder="Enter Username"
          required
          className="outline-none flex-1 bg-transparent text-gray-800 placeholder-gray-400"
          disabled={disabled}
        />
        {iconSrc}
      </div>
    </div>
  );
}
