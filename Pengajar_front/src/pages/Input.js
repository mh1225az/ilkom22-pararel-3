import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [formData, setFormData] = useState({
    judulMateri: "",
    tipeMateri: "",
    deskripsi: "",
    linkSoal: "",
    linkMateri:"",
    tingkatan: "",
    fileMateri: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      fileMateri: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DisplayMateri", { state: { formData } });
  };

  return (
    <div className="container">
      <h2 className="alert alert-primary text-center mt-2">Form Input Materi</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mt-3">
            <label htmlFor="judulMateri">Judul Materi</label>
            <input
              type="text"
              className="form-control"
              id="judulMateri"
              placeholder="Masukkan Judul Materi"
              name="judulMateri"
              value={formData.judulMateri}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="tipeMateri">Tipe Materi</label>
          <select
            className="form-control"
            id="tipeMateri"
            name="tipeMateri"
            value={formData.tipeMateri}
            onChange={handleChange}
          >
            <option value="">Pilih Tipe Materi</option>
            <option value="Video">1. Link</option>
            <option value="Dokumen">2. Dokumen</option>
            <option value="PowerPoint">3. PowerPoint</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="deskripsi">Deskripsi Materi</label>
          <textarea
            className="form-control"
            id="deskripsi"
            rows="4"
            placeholder="Masukkan Deskripsi Materi"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-3">
          <label htmlFor="linkSoal">Link Soal</label>
          <input
            type="text"
            className="form-control"
            id="linkSoal"
            placeholder="Masukkan Link Soal"
            name="linkSoal"
            value={formData.linkSoal}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="linkMateri">Link Materi</label>
          <input
            type="text"
            className="form-control"
            id="linkSoal"
            placeholder="Masukkan Link Materi"
            name="linkMateri"
            value={formData.linkMateri}
            onChange={handleChange}
          />
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label>Tingkatan</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="SMP"
                name="tingkatan"
                value="SMP"
                checked={formData.tingkatan === "SMP"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="SMP">
                SMP
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="SMA"
                name="tingkatan"
                value="SMA"
                checked={formData.tingkatan === "SMA"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="SMA">
                SMA
              </label>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="fileMateri">Upload Materi:</label>
            <input
              type="file"
              className="form-control-file"
              id="fileMateri"
              onChange={handleFileChange}
            />
            <small>Upload file dengan ukuran maksimal 2 MB.</small>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary me-3">
            SUBMIT
          </button>
          <button type="reset" className="btn btn-danger">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}
