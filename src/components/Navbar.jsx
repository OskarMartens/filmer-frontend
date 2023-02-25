import clapperboard_black from "../assets/icons/icons8-clapperboard-50.png";
import clapperboard_white from "../assets/icons/icons8-clapperboard-64-pastel.png";
import friends from "../assets/icons/icons8-friends-50.png";
import profile from "../assets/icons/icons8-customer-50.png";
import "../App.css";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-center fixed inset-x-0 bottom-0 z-10 space-x-10 pb-5 border-t-4 border-neon-red bg-white">
        <div className="flex flex-col items-center">
          <a href="/Profilepage" className={`font-medium py-2 rounded-lg`}>
            <img
              src={profile}
              alt="Profil"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <span className="text-xs text-slate-600">Profil</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="/Homepage" className={`font-medium py-2 rounded-lg`}>
            <img
              src={clapperboard_white}
              alt="Filmer"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <span className="text-xs text-slate-600">Filmer</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="/Friends" className={`font-medium py-2 rounded-lg`}>
            <img
              src={friends}
              alt="Vänner"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <span className="text-xs text-slate-600">Vänner</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
