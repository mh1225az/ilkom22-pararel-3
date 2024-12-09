import React from "react";
import { useLocation } from "react-router-dom";

export default function DisplayMateri() {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <h3>BELUM ADA DATA</h3>;
  }

  return (
    <div className="container mt-5">
      <h2 className="alert alert-success text-center">MATERI</h2>
      <ul className="list-group">
      <li className="list-group-item">
          <strong>File Materi:</strong>{" "}
          {formData.fileMateri ? (
            <a
              href={URL.createObjectURL(formData.fileMateri)}
              download={formData.fileMateri.name}
            >
              {formData.fileMateri.name} (Unduh)
            </a>
          ) : (
            "Tidak ada file"
          )}
        </li>
        <li className="list-group-item">
          <strong>Judul Materi:</strong> {formData.judulMateri}
        </li>
        <li className="list-group-item">
          <strong>Tipe Materi:</strong> {formData.tipeMateri}
        </li>
        <li className="list-group-item">
          <strong>Deskripsi:</strong> {formData.deskripsi}
        </li>
        <li className="list-group-item">
          <strong>Link Soal:</strong> {formData.linkSoal}
        </li>
        <li className="list-group-item">
          <strong>Tingkatan:</strong> {formData.tingkatan}
        </li>
        
      </ul>
    </div>
  );
}
