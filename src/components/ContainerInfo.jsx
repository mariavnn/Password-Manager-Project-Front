import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function ContainerInfo({onClick}) {
  const [favorite, setFavorite ] = useState(false);

  const handleFavorite = () =>{
    setFavorite(!favorite);
  }
  return (
    <div 
        className="w-full flex bg-zinc-800 p-3 justify-between items-center rounded-xl mb-1 cursor-pointer"
    >
      <div className="flex gap-3 items-center w-full" onClick={onClick}>
        <img
          src="/src/assets/world-wide-web.png"
          className="w-5 h-5 mr-2 opacity-70"
        />
        <p className="text-gray-300">github.com</p>
      </div>

      <div className="flex gap-2 items-center">
        <button className="cursor-pointer hover:scale-105" onClick={handleFavorite}>
          {favorite ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-zinc-500"/>}
        </button>
        <img
          src="/src/assets/caret-abajo.png"
          className="w-3.5 h-3.5 mr-2 opacity-70"
        />
      </div>
    </div>
  );
}
