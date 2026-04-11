import { Link, useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  // === KODE ASLI: Fungsi Logout Dasar ===
  // Judul: Implementasi Logout Sederhana
  // Deskripsi: Kode asli hanya melakukan redirect ke dashboard utama tanpa
  // membersihkan status login. Tidak ada logic untuk menghapus session atau
  // token autentikasi. Hanya navigasi sederhana.
  // Kode asli:
  // const handleLogout = () => {
  //   // Logic logout di sini
  //   navigate('/');
  // };

  // === KODE BARU: Fungsi Logout dengan Cleanup ===
  // Judul: Logout dengan Pembersihan Status Login
  // Deskripsi: Kode baru menambahkan penghapusan status login dari localStorage
  // sebelum redirect. Ini memastikan user benar-benar logout dan tidak bisa
  // mengakses halaman admin lagi tanpa login ulang.
  const handleLogout = () => {
    // Hapus status login
    localStorage.removeItem('isLoggedIn');
    // Redirect ke dashboard utama
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#263B6A] text-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold">SILAPOR</div>

      {/* Menu Admin */}
      <ul className="flex gap-8 text-sm">
        {/* Dashboard Admin */}
        <Link to="/admin-dashboard">
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

        {/* Kelola Laporan */}
        <Link to="/admin-reports">
          <li>
            <button className="relative group focus:outline-none">
              Laporan
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-white w-0
              group-hover:w-full group-focus:w-full transition-all duration-300"
              ></span>
            </button>
          </li>
        </Link>

      </ul>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}