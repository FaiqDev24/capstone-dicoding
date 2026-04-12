import API from "./api";

// Kirim laporan (dengan gambar)
export const createReport = async (formData) => {
  const response = await API.post("/reports", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Ambil laporan saya (user biasa)
export const getMyReports = async () => {
  const response = await API.get("/reports/my");
  return response.data;
};

// Update status laporan saya
export const updateMyReportStatus = async (id, status) => {
  const response = await API.put(`/reports/${id}/status`, { status });
  return response.data;
};

// ADMIN: Ambil semua laporan
export const getAllReports = async () => {
  const response = await API.get("/admin/reports");
  return response.data;
};

// ADMIN: Update status laporan (milik siapa saja)
export const adminUpdateStatus = async (id, status) => {
  const response = await API.put(`/admin/reports/${id}/status`, { status });
  return response.data;
};

// ADMIN: Hapus laporan
export const deleteReport = async (id) => {
  const response = await API.delete(`/admin/reports/${id}`);
  return response.data;
};