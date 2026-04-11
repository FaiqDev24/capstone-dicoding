import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/login.png";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Simulasi register sukses
    localStorage.setItem("isLoggedIn", "true");
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-3 overflow-hidden">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden max-h-[calc(100vh-1.5rem)]">
        <div className="flex flex-col justify-center bg-white px-8 py-10 lg:px-14 lg:py-16">
          <div>
            <h1 className="text-4xl font-bold text-[#1C3255] text-center">Selamat Datang!</h1>
            <p className="mt-4 text-base text-[#5F748E] text-center">
              Buat akun SILAPOR untuk mulai melaporkan masalah lingkungan.
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-[#1C3255] mb-2">
                  Nama Lengkap
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Nama Lengkap"
                  required
                  className="w-full rounded-full border border-[#D8E0F1] bg-[#F8FAFF] px-5 py-3 text-sm text-[#1C3255] outline-none transition focus:border-[#2D55F2] focus:ring-2 focus:ring-[#D7E1FF]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C3255] mb-2">
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
                <label htmlFor="password" className="block text-sm font-medium text-[#1C3255] mb-2">
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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1C3255] mb-2">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Konfirmasi Kata Sandi"
                  required
                  className="w-full rounded-full border border-[#D8E0F1] bg-[#F8FAFF] px-5 py-3 text-sm text-[#1C3255] outline-none transition focus:border-[#2D55F2] focus:ring-2 focus:ring-[#D7E1FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#2D55F2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1B3BC4]"
              >
                Buat Akun
              </button>
            </form>

            <p className="mt-7 text-sm text-[#5F748E] text-center">
              Sudah memiliki akun SILAPOR?{' '}
              <Link to="/login" className="font-semibold text-[#2D55F2] hover:text-[#1F47C2]">
                Masuk
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-lg relative hidden lg:flex items-center justify-center overflow-hidden bg-[#233A75] p-10 mt-5 mb-5">
          <div className="relative z-10 w-full max-w-[520px] text-white text-center">
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
  );
}
