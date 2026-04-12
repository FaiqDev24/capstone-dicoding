import React, { useState, useEffect } from "react";
import { login, register, getCurrentUser, logout } from "./services/authService";
import { getMyReports, createReport, getAllReports, adminUpdateStatus } from "./services/reportService";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [reports, setReports] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", category: "pengaduan", address: "", address_note: "", is_anonymous: false, image: null });

  useEffect(() => {
    const current = getCurrentUser();
    if (current) {
      setUser(current);
      fetchReports(current);
    }
  }, []);

  const fetchReports = async (currentUser) => {
    try {
      if (currentUser?.role === "admin") {
        const data = await getAllReports();
        setReports(data);
      } else {
        const data = await getMyReports();
        setReports(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
        await login(email, password);
      }
      const current = getCurrentUser();
      setUser(current);
      fetchReports(current);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setReports([]);
  };

  const handleCreateReport = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("address", form.address);
    formData.append("address_note", form.address_note);
    formData.append("is_anonymous", form.is_anonymous);
    if (form.image) formData.append("image", form.image);
    try {
      await createReport(formData);
      alert("Laporan terkirim!");
      fetchReports(user);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await adminUpdateStatus(id, newStatus);
      fetchReports(user);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleAuth}>
          {!isLogin && <input placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />}
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Buat akun" : "Sudah punya akun?"}</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Selamat datang, {user.email} {user.role === "admin" && "(Admin)"}</h2>
      <button onClick={handleLogout}>Logout</button>

      <hr />
      <h3>Buat Laporan Baru</h3>
      <form onSubmit={handleCreateReport}>
        <input placeholder="Judul" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Deskripsi" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option value="pengaduan">Pengaduan</option>
          <option value="aspirasi">Aspirasi</option>
        </select>
        <input placeholder="Alamat" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        <input placeholder="Catatan Alamat" value={form.address_note} onChange={(e) => setForm({ ...form, address_note: e.target.value })} />
        <label>
          <input type="checkbox" checked={form.is_anonymous} onChange={(e) => setForm({ ...form, is_anonymous: e.target.checked })} />
          Sembunyikan identitas
        </label>
        <input type="file" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />
        <button type="submit">Kirim Laporan</button>
      </form>

      <hr />
      <h3>Daftar Laporan</h3>
      {reports.map((report) => (
        <div key={report.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h4>{report.title}</h4>
          <p>{report.description}</p>
          <p>Status: {report.status}</p>
          {report.image && <img src={`http://localhost:3000/uploads/${report.image}`} alt="laporan" width="200" />}
          {user.role === "admin" && (
            <div>
              <select onChange={(e) => handleUpdateStatus(report.id, e.target.value)} defaultValue={report.status}>
                <option value="terverifikasi">Terverifikasi</option>
                <option value="diproses">Diproses</option>
                <option value="selesai">Selesai</option>
                <option value="invalid">Invalid</option>
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;