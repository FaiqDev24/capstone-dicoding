import { useState } from "react";

export default function MakeReport() {
  const [tipe, setTipe] = useState("");
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [catatan, setCatatan] = useState("");
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!image) newErrors.image = "Gambar wajib diupload";
    if (!tipe) newErrors.tipe = "Pilih klasifikasi laporan";
    if (!judul.trim()) newErrors.judul = "Judul wajib diisi";
    if (!deskripsi.trim()) newErrors.deskripsi = "Deskripsi wajib diisi";
    if (!alamat.trim()) newErrors.alamat = "Keterangan alamat wajib diisi";
    if (!catatan.trim()) newErrors.catatan = "Catatan alamat wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Laporan berhasil dikirim!");
      // kirim ke backend di sini
    }
  };

  return (
    <div className="min-h-full flex justify-center items-start py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[500px] rounded-2xl border border-gray-300 shadow-md p-6"
      >
        {/* Header */}
        <label className="bg-[#7FBA61] text-white flex items-center justify-center py-3 rounded-lg mb-5 font-semibold">
          Sampaikan laporan anda!
        </label>

        {/* Upload */}
        <label className="bg-[#7FBA61] hover:bg-[#6AA84F] text-white flex items-center justify-center gap-2 py-3 rounded-full cursor-pointer transition">
          📷 Upload Gambar
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {errors.image && (
          <p className="text-red-500 text-sm mt-2">{errors.image}</p>
        )}

        {/* Preview */}
        {image && (
          <img
            src={image.preview}
            alt="preview"
            className="mt-4 w-full h-[200px] object-cover rounded-xl"
          />
        )}

        {/* Klasifikasi */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">
            Klasifikasi Laporan
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tipe"
                value="pengaduan"
                checked={tipe === "pengaduan"}
                onChange={(e) => setTipe(e.target.value)}
                className="accent-green-500"
              />
              Pengaduan
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tipe"
                value="aspirasi"
                checked={tipe === "aspirasi"}
                onChange={(e) => setTipe(e.target.value)}
                className="accent-gray-400"
              />
              Aspirasi
            </label>
          </div>
          {errors.tipe && (
            <p className="text-red-500 text-sm mt-2">{errors.tipe}</p>
          )}
        </div>

        {/* Judul */}
        <input
          type="text"
          placeholder="Judul Laporan"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="mt-4 w-full bg-gray-100 p-3 rounded-lg outline-none"
        />
        {errors.judul && (
          <p className="text-red-500 text-sm mt-1">{errors.judul}</p>
        )}

        {/* Deskripsi */}
        <textarea
          placeholder="Deskripsi Laporan"
          rows="5"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          className="mt-4 w-full bg-gray-100 p-3 rounded-lg outline-none resize-none"
        ></textarea>
        {errors.deskripsi && (
          <p className="text-red-500 text-sm mt-1">
            {errors.deskripsi}
          </p>
        )}

        {/* Keterangan Alamat */}
        <textarea
          placeholder="Keterangan Alamat"
          rows="3"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          className="mt-4 w-full bg-gray-100 p-3 rounded-lg outline-none resize-none"
        ></textarea>
        {errors.alamat && (
          <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
        )}

        {/* Catatan Alamat */}
        <input
          type="text"
          placeholder="Catatan Alamat"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          className="mt-4 w-full bg-gray-100 p-3 rounded-lg outline-none"
        />
        {errors.catatan && (
          <p className="text-red-500 text-sm mt-1">{errors.catatan}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full bg-[#263B6A] text-white py-3 rounded-full hover:opacity-90 transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}