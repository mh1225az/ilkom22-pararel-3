def tampilkan_pertanyaan(pertanyaan, pilihan):
    print(pertanyaan)
    for i, pilihan_jawaban in enumerate(pilihan):
        print(f"{i + 1}. {pilihan_jawaban}")

def tampilkan_profil(nama_pemain, senjata, lokasi, kubu):
    print("\n=== Profil Anda ===")
    print(f"Nama: {nama_pemain}")
    print(f"Senjata yanhhhg dipilih: {senjata}")
    print(f"Lokasi pertempuran: {lokasi}")
    print(f"Kubu: {kubu}")
    print("===================\n")

def main():
    # Meminta pemain untuk memasukkan nama
    nama_pemain = input("Masukkan nama kamu: ")
    print(f"Halo, {nama_pemain}! Selamat datang di permainan tanya SIMULASI PERANG.")

    # Daftar pertanyaan, pilihan jawaban, dan jawaban benar
    daftar_pertanyaan = [
        {
            "pertanyaan": "Apakah anda ingin bermain?",
            "pilihan": ["Iya", "Tidak"],
            "jawaban_benar": 1
        },
        {
            "pertanyaan": "Pilih jenis senjata?",
            "pilihan": ["Pistol", "SS-2 Pindad", "AK-47", "Katana"],
            "jawaban_benar": 2
        },
        {
            "pertanyaan": "Pilih lokasi pertempuran?",
            "pilihan": ["Twin Towers", "Kuba", "Apalachee High School", "Berlin"],
            "jawaban_benar": 2
        },
        {
            "pertanyaan": "Pilih Kubu?",
            "pilihan": ["Nazi", "Inggris", "Amerika Serikat", "Prancis"],
            "jawaban_benar": 1
        }
    ]

    jawaban_senarai = []
    senjata = ""
    lokasi = ""
    kubu = ""

    # Memulai game
    for index, soal in enumerate(daftar_pertanyaan):
        tampilkan_pertanyaan(soal["pertanyaan"], soal["pilihan"])
        jawaban = int(input("Pilih jawaban yang benar (1/2/3/4): "))

        # Simpan jawaban
        jawaban_senarai.append(soal["pilihan"][jawaban - 1])

        # Cek soal spesifik untuk ambil senjata, lokasi, dan kubu
        if index == 1:
            senjata = soal["pilihan"][jawaban - 1]
        elif index == 2:
            lokasi = soal["pilihan"][jawaban - 1]
        elif index == 3:
            kubu = soal["pilihan"][jawaban - 1]

    # Tampilkan profil pemain
    tampilkan_profil(nama_pemain, senjata, lokasi, kubu)

    # Ucapan selamat berperang
    print(f"Selamat berperang, {nama_pemain}! Anda bertempur di {lokasi} dengan {senjata} di pihak {kubu}.")

    # Skenario berdasarkan lokasi dan senjata
    if lokasi == "Twin Towers":
        if kubu == "Amerika Serikat":
            print(f"\n{nama_pemain}, Anda ditugaskan untuk mempertahankan Twin Towers dari serangan tentara Amerika. Gunakan {senjata} untuk melawan musuh yang mencoba menguasai kawasan ini.")
        else:
            print(f"\n{nama_pemain}, Anda menghadapi tentara Amerika di Twin Towers. Dengan {senjata}, bersiaplah untuk menghadapi serangan balik yang kuat!")

    elif lokasi == "Kuba":
        if kubu == "Inggris":
            print(f"\n{nama_pemain}, Anda terlibat dalam misi rahasia di Kuba melawan pemberontak. Gunakan {senjata} Anda untuk menghadapi ancaman di wilayah ini.")
        else:
            print(f"\n{nama_pemain}, Anda harus melawan pemberontak yang mengancam stabilitas Kuba. Dengan {senjata}, rencanakan strategi Anda!")

    elif lokasi == "Apalachee High School":
        if kubu == "Amerika Serikat":
            print(f"\n{nama_pemain}, Anda berada di sekolah yang terjebak dalam kekacauan. Dengan {senjata}, Anda harus menyelamatkan siswa dari ancaman tentara yang menyerang.")
        else:
            print(f"\n{nama_pemain}, Anda menghadapi siswa yang terlatih di Apalachee High School. Dengan {senjata}, rencanakan tindakan Anda dengan hati-hati!")

    elif lokasi == "Berlin":
        if kubu == "Nazi":
            print(f"\n{nama_pemain}, Anda berada di medan perang terakhir di Berlin. Dengan {senjata}, hadapi tentara Nazi yang berusaha menguasai wilayah ini.")
        else:
            print(f"\n{nama_pemain}, Anda bertempur di Berlin melawan tentara Nazi. Dengan {senjata}, tunjukkan keberanian Anda di medan perang ini!")

if __name__ == "__main__":
    main()
