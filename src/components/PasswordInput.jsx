import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaCopy } from "react-icons/fa6";


export default function PasswordInput({
  label,
  bgColor = "white",
  disabled,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "Enter Password",
  copy = false ,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value); 
      setCopied(true); 
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar la contraseña:", err);
    }
  };

  const backgroundClass = bgColor === "gray" ? "bg-zinc-700/70" : "bg-white";
  const textColorClass = bgColor === 'gray' ? 'text-white' : 'text-gray-600';

  return (
    <div>
      <label htmlFor={name} className="block text-gray-300 mb-1 font-medium">
        {label}
      </label>
      <div
        className={`flex items-center ${backgroundClass} rounded-xl p-2 focus-within:ring-2 focus-within:ring-green-200`}
      >
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeholder}
          required
          disabled={disabled}
          className={`outline-none flex-1 bg-transparent ${textColorClass} placeholder-gray-400`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="cursor-pointer"
        >
          {showPassword ? (
            <IoEye className="text-zinc-500" />
          ) : (
            <IoEyeOff className="text-zinc-500" />
          )}
        </button>
        {
          copy && (
            <button className="ml-2 cursor-pointer" onClick={handleCopy}>
                <FaCopy className="text-zinc-500"/>
            </button>
          )
        }
        
      </div>
      {copied && (
        <p className="text-gray-400 text-sm mt-1">¡Contraseña copiada con éxito!</p>
      )}
    </div>
  );
}
