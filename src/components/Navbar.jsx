import React from "react";

const Navbar = () => {
  const isLogin = false;

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-700 text-white shadow-md">
      
      {/* Logo */}
      <div className="text-lg font-bold">
        SILAPOR
      </div>

      {/* Menu */}
      <ul className="flex gap-8 text-sm">
        
        {/* Dashboard */}
        <li>
          <button className="relative group focus:outline-none">
            Dashboard
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 
              group-hover:w-full group-focus:w-full transition-all duration-300">
            </span>
          </button>
        </li>

        {/* Buat Laporan */}
        <li>
          <button className="relative group focus:outline-none">
            Buat Laporan
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 
              group-hover:w-full group-focus:w-full transition-all duration-300">
            </span>
          </button>
        </li>

        {/* Laporan Saya */}
        <li>
          <button className="relative group focus:outline-none">
            Laporan Saya
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 
              group-hover:w-full group-focus:w-full transition-all duration-300">
            </span>
          </button>
        </li>

      </ul>

      {/* Auth */}
      <div>
        {isLogin ? (
          <div className="w-9 h-9 flex items-center justify-center bg-gray-300 text-black rounded-full cursor-pointer">
            👤
          </div>
        ) : (
          <button className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-slate-700 transition">
            Login
          </button>
        )}
      </div>

    </nav>
  );
};

export default Navbar;