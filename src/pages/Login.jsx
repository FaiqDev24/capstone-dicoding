import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/login.png";

export default function Login() {
  // === KODE ASLI: Form Login Statis ===
  // Judul: Implementasi Login dengan Form HTML Statis
  // Deskripsi: Kode asli menampilkan form login tanpa fungsionalitas. Hanya UI
  // statis tanpa state management, event handlers, atau validasi. Form tidak
  // bisa mengirim data dan tidak ada redirect setelah submit.
  //
  // Kode asli lengkap:
  // <div className="min-h-screen flex justify-center items-center bg-gray-50">
  //   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
  //     ...
  //   </div>
  // </div>

  // === KODE BARU: Login Page Sesuai Desain ===
  // Judul: Login Page Dua Kolom dengan Ilustrasi
  // Deskripsi: Halaman login baru mengikuti desain yang diberikan, dengan
  // form di sebelah kiri dan panel ilustrasi di sebelah kanan.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center bg-white px-8 py-10 lg:px-14 lg:py-16">
          <div>
            <h1 className="text-4xl font-bold text-[#1C3255] text-center">
              Selamat Datang!
            </h1>
            <p className="mt-4 text-base text-[#5F748E] justify-center text-center">
              Laporkan masalah lingkungan dengan lebih mudah dan terorganisir
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1C3255] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-full border border-[#D8E0F1] bg-[#F8FAFF] px-5 py-3 text-sm text-[#1C3255] outline-none transition focus:border-[#2D55F2] focus:ring-2 focus:ring-[#D7E1FF]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#1C3255] mb-2"
                >
                  Kata Sandi
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Kata Sandi"
                  required
                  className="w-full rounded-full border border-[#D8E0F1] bg-[#F8FAFF] px-5 py-3 text-sm text-[#1C3255] outline-none transition focus:border-[#2D55F2] focus:ring-2 focus:ring-[#D7E1FF]"
                />
              </div>

              <div className="flex items-center text-sm text-[#5F748E] justify-end">
                <button
                  type="button"
                  className="font-medium text-[#2D55F2] hover:text-[#1F47C2]"
                >
                  Lupa Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#2D55F2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1B3BC4]"
              >
                Masuk
              </button>
            </form>

            <p className="mt-3 text-sm text-[#5F748E] text-center">
              Belum punya akun SILAPOR?{' '}
              <Link
                to="/register"
                className="font-semibold text-[#2D55F2] hover:text-[#1F47C2]"
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-lg relative hidden lg:flex items-center justify-center overflow-hidden bg-[#233A75] p-10">
            <div className="relative z-10 w-full max-w-[520px] text-white text-center mt-10 mb-10">
              <img
                src={heroImage}
                alt="Illustration"
                className="mx-auto w-full max-w-[420px] object-contain"
              />
              <h2 className="mt-10 text-3xl">
                Permudah pelaporan lingkungan dengan <span className="font-bold">SILAPOR</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
