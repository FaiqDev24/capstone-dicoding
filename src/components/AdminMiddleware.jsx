import { Navigate } from "react-router-dom";

export default function AdminMiddleware({ children }) {
  // === KODE ASLI: Sistem Middleware Admin Sementara ===
  // Judul: Implementasi Middleware Admin Dasar
  // Deskripsi: Kode asli menggunakan logic sederhana dengan isAdmin = false
  // untuk testing. Tidak ada sistem autentikasi nyata, hanya redirect berdasarkan
  // boolean statis. Digunakan untuk memisahkan akses admin dari user biasa.
  // Kode asli:
  // const isAdmin = false; // Ubah ke true untuk testing admin
  // if (!isAdmin) {
  //   return <Navigate to="/" replace />;
  // }
  // return children;

  // === KODE BARU: Sistem Middleware dengan Login Check ===
  // Judul: Middleware Admin dengan Pengecekan Status Login
  // Deskripsi: Kode baru menambahkan pengecekan status login dari localStorage.
  // Jika belum login, redirect ke halaman login. Jika sudah login, izinkan akses
  // ke admin dashboard. Menggunakan localStorage untuk simulasi autentikasi.
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = true; // Asumsikan semua yang login adalah admin untuk testing

  // Jika belum login, redirect ke login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login dan admin, tampilkan halaman admin
  if (isLoggedIn && isAdmin) {
    return children;
  }

  // Fallback: redirect ke dashboard utama
  return <Navigate to="/" replace />;
}