import React from "react";
import "../App.css";

function Frontpage() {



  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-new-york2">
      <div className="neon-border-container mx-auto max-w-7xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
        <div className="neon-border items-center justify-center max-sm:px-8 backdrop-blur-sm">
          <h1 className="neon-text text-white text-10xl text-center mb-4">
            Filmer
          </h1>
          <form className="flex flex-col items-center" action="">
            <div className="mb-4 text-lg">
                <input className="rounded-2xl border-none bg-white px-6 py-2 text-center text-black placeholder-gray-400" type="text" name="name" placeholder="Användarnamn" />
            </div>
            <div className="mb-4 text-lg">
                <input className="rounded-2xl border-none bg-white px-6 py-2 text-center text-black placeholder-gray-400" type="password" name="name" placeholder="Lösenord" />
            </div>
            <div className="flex space-x-10">
                <button className="text-black bg-white rounded-2xl px-4 py-2">Logga in</button>
                <button className="text-black bg-white rounded-2xl px-4 py-2">Registrera</button>
            </div>
          </form>
        </div>
        <div className="text-white">Info</div>
      </div>
    </div>
  );
}

export default Frontpage;
