export default function Detail() {
  return (
    <div className="min-h-full flex justify-center py-8 px-15 mt-5">
      <div className="w-[1200px] overflow-hidden flex gap-10">
        <div className="w-1/2">
          {/* Image */}
          <img
            src="https://cdn0-production-images-kly.akamaized.net/D7Sqo27eFy1IHxp6Ie-jCDQXZ78=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2849673/original/055931500_1562750609-20190710-Ada-Pertandingan-Persija-vs-Persib_-Parkir-Liar-Menjamur-di-Senayan4.jpg"
            alt="report"
            className="w-full h-[350px] object-cover"
          />

          {/* Status */}
          <div className="flex justify-end items-center px-4 py-2">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-base text-gray-600">Terverifikasi</span>
          </div>

          {/* Info Bar */}
          <div className="flex text-white text-base font-medium">
            <div className="flex-1 bg-[#7FBA61] text-center py-3">
              <p>Waktu</p>
              <p className="font-semibold">12/01/2026 07:55:35</p>
            </div>
            <div className="flex-1 bg-[#9ACB7D] text-center py-3">
              <p>Pelapor</p>
              <p className="font-semibold">Udin</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          {/* Content */}
          <div className="px-4 pb-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              PARKIR LIAR
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Banyak sekali orang yang memarkirkan motor mereka secara
              sembarangan, terutama di area yang seharusnya digunakan oleh
              pejalan kaki. Hal ini membuat saya sebagai pejalan kaki merasa
              terganggu dan tidak nyaman ketika berjalan. Trotoar yang
              seharusnya menjadi jalur aman bagi pejalan kaki sering kali
              terhalang oleh motor yang diparkir tidak pada tempatnya, sehingga
              kami terpaksa berjalan di pinggir jalan yang lebih berbahaya.
            </p>

            {/* Lokasi */}
            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg">Keterangan Lokasi</p>
              <p className="text-base text-gray-600 mt-2">
                Jl. Bangbarung Raya No.5, RT.01/RW.11, Bantarjati, Kec. Bogor
                Utara, Kota Bogor, Jawa Barat 16153, Indonesia
              </p>
            </div>

            {/* Catatan */}
            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg">Catatan Lokasi</p>
              <p className="text-base text-gray-600 mt-2">Depan Indomaret</p>
            </div>

            {/* Klasifikasi */}
            <div className="mt-5">
              <p className="font-semibold text-gray-800 text-lg mb-3">
                Klasifikasi Laporan
              </p>
              <span className="bg-[#263B6A] text-white px-6 py-2 rounded-md text-base">
                Aspirasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
