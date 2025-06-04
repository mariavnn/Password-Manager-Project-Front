import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";



export default function PasswordInput({ label, bgColor = 'white', disabled }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  // Establece la clase de fondo según la prop
  const backgroundClass = bgColor === 'gray' ? 'bg-zinc-700/70' : 'bg-white';

  return (
    <div>
      <label htmlFor="password" className="block text-gray-300 mb-1 font-medium">
        {label}
      </label>
      <div className={`flex items-center ${backgroundClass} rounded-xl p-2 focus-within:ring-2 focus-within:ring-green-200`}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="Enter Password"
          required
          disabled={disabled}
          className="outline-none flex-1 bg-transparent text-gray-800 placeholder-gray-400"
        />
        <button 
          type="button" 
          onClick={togglePasswordVisibility}
          className="cursor-pointer"
        > 
          {showPassword ? <IoEye className="text-zinc-500"/> : <IoEyeOff className="text-zinc-500"/>}
        </button>
      </div>
    </div>
  );
}
