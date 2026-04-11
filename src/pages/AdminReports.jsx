import { useState } from "react";

export default function AdminReports() {
  // Status filter active: semua, pending, approved, rejected
  const [activeFilter, setActiveFilter] = useState("all");

  // Data laporan dummy untuk testing
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Jalan Rusak di Jalan Sudirman",
      description: "Jalan berlubang parah menyebabkan kemacetan",
      category: "Infrastruktur",
      status: "pending",
      date: "2024-01-15",
      location: "Jl. Sudirman No. 123",
      reporter: "Ahmad Surya",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Lampu Jalan Mati",
      description: "Beberapa lampu jalan tidak menyala sejak seminggu lalu",
      category: "Penerangan",
      status: "pending",
      date: "2024-01-14",
      location: "Jl. Malioboro KM 5",
      reporter: "Siti Nurhaliza",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Sampah Menumpuk",
      description: "Tempat sampah penuh dan tidak diangkut selama 3 hari",
      category: "Kebersihan",
      status: "approved",
      date: "2024-01-13",
      location: "Taman Kota A",
      reporter: "Budi Santoso",
      image: "/api/placeholder/300/200"
    }
  ]);

  const handleApprove = (id) => {
    setReports(reports.map(report =>
      report.id === id ? { ...report, status: 'approved' } : report
    ));
  };

  const handleReject = (id) => {
    setReports(reports.map(report =>
      report.id === id ? { ...report, status: 'rejected' } : report
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Menunggu Verifikasi';
      case 'approved': return 'Disetujui';
      case 'rejected': return 'Ditolak';
      default: return 'Unknown';
    }
  };

  const filteredReports = reports.filter((report) => {
    if (activeFilter === "all") return true;
    return report.status === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Verifikasi Laporan</h1>
          <p className="mt-2 text-gray-600">Kelola dan verifikasi laporan masyarakat</p>
        </div>

        {/* Filter Status */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-md transition duration-200 ${activeFilter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
            >
              Semua ({reports.length})
            </button>
            <button
              onClick={() => setActiveFilter("pending")}
              className={`px-4 py-2 rounded-md transition duration-200 ${activeFilter === "pending" ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200"}`}
            >
              Pending ({reports.filter(r => r.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveFilter("approved")}
              className={`px-4 py-2 rounded-md transition duration-200 ${activeFilter === "approved" ? "bg-green-600 text-white" : "bg-green-100 text-green-800 border border-green-200 hover:bg-green-200"}`}
            >
              Disetujui ({reports.filter(r => r.status === 'approved').length})
            </button>
            <button
              onClick={() => setActiveFilter("rejected")}
              className={`px-4 py-2 rounded-md transition duration-200 ${activeFilter === "rejected" ? "bg-red-600 text-white" : "bg-red-100 text-red-800 border border-red-200 hover:bg-red-200"}`}
            >
              Ditolak ({reports.filter(r => r.status === 'rejected').length})
            </button>
          </div>
        </div>

        {/* Daftar Laporan */}
        <div className="space-y-6">
          {filteredReports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{report.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                        {getStatusText(report.status)}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{report.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Kategori:</span> {report.category}
                      </div>
                      <div>
                        <span className="font-medium">Lokasi:</span> {report.location}
                      </div>
                      <div>
                        <span className="font-medium">Pelapor:</span> {report.reporter}
                      </div>
                      <div>
                        <span className="font-medium">Tanggal:</span> {report.date}
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 flex-shrink-0">
                    <img
                      src={report.image}
                      alt="Laporan"
                      className="w-32 h-24 object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                {report.status === 'pending' && (
                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={() => handleApprove(report.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                    >
                      Setujui
                    </button>
                    <button
                      onClick={() => handleReject(report.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                    >
                      Tolak
                    </button>
                  </div>
                )}

                {report.status === 'approved' && (
                  <div className="mt-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      ✓ Laporan telah disetujui dan akan diproses
                    </span>
                  </div>
                )}

                {report.status === 'rejected' && (
                  <div className="mt-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      ✗ Laporan ditolak
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {reports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada laporan untuk ditampilkan</p>
          </div>
        )}
      </div>
    </div>
  );
}