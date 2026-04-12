import { useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      title: "PARKIR LIAR",
      author: "Udin",
      date: "12/01/2026",
      status: "Terverifikasi",
      statusColor: "bg-green-100 text-green-800",
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=120&q=80",
      image:
        "https://images.unsplash.com/photo-1534723451958-45b98952b5b5?auto=format&fit=crop&w=1200&q=80",
      location:
        "Jl. Bangbarung Raya No.5, RT.01/RW.11, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153, Indonesia",
      note: "Depan Indomaret",
      category: "Aspirasi",
      description:
        "Banyak sekali orang yang memarkirkan motor mereka secara sembarangan, terutama di area yang seharusnya digunakan oleh pejalan kaki. Hal ini membuat saya sebagai pejalan kaki merasa terganggu dan tidak nyaman ketika berjalan.",
    },
    {
      id: 2,
      title: "JALAN RUSAK",
      author: "Budi",
      date: "11/01/2026",
      status: "Dalam Proses",
      statusColor: "bg-yellow-100 text-yellow-800",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=120&q=80",
      image:
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1200&q=80",
      location:
        "Jl. Siliwangi No. 20, RT.04/RW.02, Kec. Bogor Tengah, Kota Bogor, Jawa Barat 16122, Indonesia",
      note: "Dekat sekolah dasar",
      category: "Aspirasi",
      description:
        "Permukaan jalan banyak berlubang dan berlumpur, sehingga kendaraan sering tergelincir dan pejalan kaki merasa tidak aman. Perbaikan segera diperlukan untuk mencegah kecelakaan.",
    },
  ];

  return (
    <div className="py-8 px-15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Admin</h1>
          <p className="text-gray-600">Kelola laporan dan data SILAPOR</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Laporan</p>
                <p className="text-2xl font-bold text-gray-800">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Laporan Terverifikasi</p>
                <p className="text-2xl font-bold text-gray-800">987</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Dalam Proses</p>
                <p className="text-2xl font-bold text-gray-800">156</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Belum Diproses</p>
                <p className="text-2xl font-bold text-gray-800">91</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Laporan Terbaru</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={report.thumbnail}
                      alt="report"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{report.title}</h3>
                      <p className="text-sm text-gray-600">Oleh: {report.author} - {report.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${report.statusColor}`}>
                      {report.status}
                    </span>
                    <button
                      onClick={() => navigate("/detail", { state: report })}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}