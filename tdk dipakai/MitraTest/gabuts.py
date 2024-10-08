import random

# Game tebak angka
def tebak_angka():
    angka_rahasia = random.randint(1, 100)  # Komputer memilih angka acak antara 1 dan 100
    tebakan = None
    percobaan = 0

    print("Selamat datang di game Tebak Angka!")
    print("Saya sudah memilih angka antara 1 dan 100. Coba tebak!")

    # Pemain menebak angka hingga benar
    while tebakan != angka_rahasia:
        tebakan = int(input("Masukkan tebakan Anda: "))
        percobaan += 1

        if tebakan < angka_rahasia:
            print("Tebakan Anda terlalu rendah.")
        elif tebakan > angka_rahasia:
            print("Tebakan Anda terlalu tinggi.")
        else:
            print(f"Selamat! Anda menebak angka {angka_rahasia} dengan benar dalam {percobaan} percobaan.")

# Memulai permainan
tebak_angka()