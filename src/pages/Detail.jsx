import { useLocation, useNavigate } from "react-router-dom";

const fallbackReport = {
  title: "PARKIR LIAR",
  author: "Udin",
  date: "12/01/2026 07:55:35",
  status: "Terverifikasi",
  statusColor: "bg-green-500",
  image:
    "https://cdn0-production-images-kly.akamaized.net/D7Sqo27eFy1IHxp6Ie-jCDQXZ78=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2849673/original/055931500_1562750609-20190710-Ada-Pertandingan-Persija-vs-Persib_-Parkir-Liar-Menjamur-di-Senayan4.jpg",
  location:
    "Jl. Bangbarung Raya No.5, RT.01/RW.11, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153, Indonesia",
  note: "Depan Indomaret",
  category: "Aspirasi",
  description:
    "Banyak sekali orang yang memarkirkan motor mereka secara sembarangan, terutama di area yang seharusnya digunakan oleh pejalan kaki. Hal ini membuat saya sebagai pejalan kaki merasa terganggu dan tidak nyaman ketika berjalan. Trotoar yang seharusnya menjadi jalur aman bagi pejalan kaki sering kali terhalang oleh motor yang diparkir tidak pada tempatnya, sehingga kami terpaksa berjalan di pinggir jalan yang lebih berbahaya.",
};

export default function Detail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const report = state || fallbackReport;

  return (
    <div className="min-h-full flex justify-center py-8 px-15 mt-5">
      <div className="w-[1200px] overflow-hidden flex flex-col gap-6">
        <button
          onClick={() => navigate(-1)}
          className="self-start text-blue-600 hover:text-blue-800 font-medium"
        >
          &larr; Kembali ke Dashboard
        </button>

        <div className="overflow-hidden flex flex-col lg:flex-row gap-10 bg-white rounded-lg shadow-md p-6">
          <div className="lg:w-1/2">
            <img
              src={report.image || fallbackReport.image}
              alt="report"
              onError={(event) => {
                event.currentTarget.src = fallbackReport.image;
              }}
              className="w-full h-[350px] object-cover rounded-lg"
            />

            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-2 ${report.statusColor}`}></span>
                <span>{report.status}</span>
              </div>
              <div>
                <p className="font-semibold">{report.date}</p>
                <p>{report.author}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{report.title}</h2>

            <p className="text-gray-700 text-base leading-relaxed">
              {report.description}
            </p>

            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg">Keterangan Lokasi</p>
              <p className="text-base text-gray-600 mt-2">{report.location}</p>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg">Catatan Lokasi</p>
              <p className="text-base text-gray-600 mt-2">{report.note}</p>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg mb-3">Klasifikasi Laporan</p>
              <span className="bg-[#263B6A] text-white px-6 py-2 rounded-md text-base">
                {report.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
