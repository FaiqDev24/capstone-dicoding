import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="p-2 flex justify-center">
      <div className="bg-[#F6F6F6] rounded-2xl shadow-md p-4 flex gap-4 w-[95%]">
        
        {/* Image */}
        <img
          src="https://cdn0-production-images-kly.akamaized.net/D7Sqo27eFy1IHxp6Ie-jCDQXZ78=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2849673/original/055931500_1562750609-20190710-Ada-Pertandingan-Persija-vs-Persib_-Parkir-Liar-Menjamur-di-Senayan4.jpg"
          alt="parkir liar"
          className="w-[263px] h-auto object-cover rounded-xl"
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          
          {/* Top Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              PARKIR LIAR
            </h2>

            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
              <span className="bg-[#6984A9] text-white px-3 py-1 rounded-full text-xs">
                Aspirasi
              </span>
              <span>- Udin</span>
              <span>- 12/01/2026</span>
              <span>- 07:55:35</span>
            </div>

            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              Banyak sekali orang orang yang parkir motor sembarangan, 
              saya sebagai pejalan kaki merasa terganggu
            </p>

          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-700">
              Terverifikasi
            </span>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-end">
            <Link to="/detail">
            <button className="mt-1 px-4 mb-2 text-sm text-blue-600 font-semibold hover:text-blue-800 transition">
              Selengkapnya
            </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}