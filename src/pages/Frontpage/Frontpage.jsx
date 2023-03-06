import React from "react";
import "../../App.css";
import Headlight from "../../components/Headlight/Headlight";
import { useState, useEffect } from "react";
import MouseFollower from "../../components/MouseFollower/MouseFollower";
import Skysignal from "../../components/Skylight/Skysignal";
import BarFollowMouse from "../../components/BarFollowMouse/BarFollowMouse";


function Frontpage() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  return (
    <div class="grid grid-cols-11 grid-rows-16 h-screen bg-gray-900 bg-cover bg-bottom bg-no-repeat bg-stockholm">
    <h1 className="mobile-s:row-start-2 mobile-s:col-start-1 mobile-s:col-span-11
                  neon-text text-6xl text-center">Filmer</h1>
      <div
        class="mobile-s:row-start-4 mobile-s:col-start-2 mobile-s:col-span-9 
                  tablet:row-start-4 tablet:col-start-4 tablet:col-span-5 
                  laptop:row-start-4 laptop:col-start-5 laptop:col-span-3
                  aspect-2/3 backdrop-blur-sm neon-border"
      >
        <div
          className="absolute mobile-s:bottom-20 laptop-l:bottom-40 mobile-s:left-1/2 mobile-s:right-1/2"
        >
          <form
            className="flex flex-col justify-between items-center"
            action=""
          >
            <div className="mb-4">
              <input
                className="rounded-2xl border-none bg-white px-6 py-2 text-center text-black placeholder-gray-400"
                type="text"
                name="name"
                placeholder="Användarnamn"
              />
            </div>
            <div className="mb-4">
              <input
                className="rounded-2xl border-none bg-white px-6 py-2 text-center text-black placeholder-gray-400"
                type="password"
                name="name"
                placeholder="Lösenord"
              />
            </div>
            <div className="flex justify-center space-x-10 pt-10">
              <button className="text-black bg-white rounded-2xl px-3 py-1 flex-shrink-0">
                Logga in
              </button>
              <button className="text-black bg-white rounded-2xl px-3 py-1">
                Registrera
              </button>
            </div>
          </form>
        </div>
      </div>
      <BarFollowMouse />
    </div>
  );
}

export default Frontpage;
