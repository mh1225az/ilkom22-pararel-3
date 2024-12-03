import React from "react";

function Input(){
    return(
        <div class="container">
        <h2 class="alert alert-primary text-center mt-2">
          Form Input Materi
        </h2>
        <form class="form-group">
          <div class="row">
            <div class=" mt-3">
              <label for="JudulMateri">Judul Materi</label>
              <input
                type="text"
                class="form-control"  
                id="JudulMateri"
                placeholder="Masukkan Judul Materi"
              />
            </div>
          </div>

          <div class="form-group mt-3">
            <label for="jurusan">Tipe Materi</label>
            <select class="form-control" id="Tmateri">
              <option>1. Vidio</option>
              <option>2. Document</option>
              <option>3. Power Point</option>
            </select>
          </div>

          <div class="form-group mt-3">
            <label for="alasan">Deskripsi Materi</label>
            <textarea
              class="form-control"
              id="Deskripsi"
              rows="4"
              placeholder="Masukkan Deskripsi Materi"
            ></textarea>
          </div>
          <div class=" mt-3">
              <label for="JudulMateri">Link Soal</label>
              <input
                type="text"
                class="form-control"  
                id="LinkSoal"
                placeholder="Masukkan Link Soal"
              />
            </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <label>Tingkatan</label>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="SMP"
                  name="SMP"
                />
                <label class="form-check-label" for="SMP">SMP</label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="SMA"
                  name="jenis-kelamin"
                />
                <label class="form-check-label" for="SMA">SMA</label>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <label>Upload Materi:</label>
              <input type="file" class="form-control-file" />
              <small>Upload File dengan maksimal 2 MB</small>
            </div>
          </div>

          <div class="mt-4">
          <button type="submit" className="btn btn-primary me-3">SUBMIT</button>
          <button type="reset" className="btn btn-danger">RESET</button>
          </div>
        </form>
      </div>

    );
};

export default Input;
