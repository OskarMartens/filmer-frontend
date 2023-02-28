import React from "react";
import "../../App.css";

function Frontpage() {
  return (
    <div className="flex h-screen w-full items-center justify-center flex-col bg-gray-900 bg-cover bg-bottom bg-no-repeat bg-stockholm">
      <div className="neon-border mb-10 items-center mt-7 justify-center aspect-2/3 backdrop-blur-sm 
              max-w-screen-lg max-h-screen-lg lg:max-w-screen-xl lg:max-h-screen-xl">
        <h1 className="neon-text text-6xl pt-5 text-center mb-4">
          Filmer
        </h1>
        <form className="flex flex-col items-center ml-4 mr-4"  action="">
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
          <div className="flex space-x-10 pt-10">
            <button className="text-black bg-white rounded-2xl px-4 py-2">
              Logga in
            </button>
            <button className="text-black bg-white rounded-2xl px-4 py-2">
              Registrera
            </button>
          </div>
        </form>
      </div>
      <div className="items-left">
        <div className="neon-text text-2xl mt-10">Info</div>
      </div>
    </div>
  );
}

export default Frontpage;
