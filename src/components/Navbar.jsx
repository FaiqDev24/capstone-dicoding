import { Link } from "react-router-dom";

export default function Navbar() {
  // === KODE ASLI: Status Login Statis ===
  // Judul: Pengecekan Login dengan Boolean Statis
  // Deskripsi: Kode asli menggunakan boolean false yang tetap, sehingga navbar
  // selalu menampilkan tombol "Log in" dan tidak pernah menampilkan avatar.
  // Tidak ada integrasi dengan sistem autentikasi.
  // Kode asli:
  // const isLogin = false;

  // === KODE BARU: Status Login dari localStorage ===
  // Judul: Pengecekan Login Dinamis
  // Deskripsi: Kode baru memeriksa status login dari localStorage. Jika user
  // sudah login (isLoggedIn = 'true'), maka navbar akan menampilkan avatar
  // dan menyembunyikan tombol login.
  const isLogin = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#263B6A] text-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold">SILAPOR</div>

      {/* Menu */}
      <ul className="flex gap-8 text-sm">
        {/* Dashboard */}
        <Link to="/">
          <li>
            <button className="relative group focus:outline-none">
              Dashboard
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 
              group-hover:w-full group-focus:w-full transition-all duration-300"
              ></span>
            </button>
          </li>
        </Link>

        {/* Buat Laporan */}
        <Link to="/makereport">
          <li>
            <button className="relative group focus:outline-none">
              Buat Laporan
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 
              group-hover:w-full group-focus:w-full transition-all duration-300"
              ></span>
            </button>
          </li>
        </Link>
      </ul>

      {/* Auth */}
      <div>
        {isLogin ? (
          <div className="w-9 h-9 flex items-center justify-center bg-gray-300 text-black rounded-full cursor-pointer">
            👤
          </div>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition font-medium">
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
