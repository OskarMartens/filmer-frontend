import React from "react";
import Navbar from "../../components/Navbar";

function Friendspage() {
  return (
    <div className="grid grid-cols-11 grid-rows-16 h-screen
                  bg-gray-900 bg-cover bg-bottom bg-no-repeat bg-stockholm backdrop-blur-lg">
      <h1 className="mobile-s:row-start-2 mobile-s:col-start-1 mobile-s:col-span-11
                    neon-text text-6xl text-center">
                  Vänner
      </h1>
      <div
        className="row-start-4 row-span-5 col-start-2 col-span-9
                      tablet:col-start-5 tablet:col-span-3
                      neon-border aspect-2/3 relative"
      > </div>
      <Navbar />
    </div>
  );
}

export default Friendspage;
