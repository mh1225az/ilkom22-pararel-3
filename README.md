# getting started
use uvicorn for running Order services

```bash
uvicorn order1:app --reload --port 7080
uvicorn order2:app --reload --port 7081
uvicorn order3:app --reload --port 7082
```



# how to run docker compose
Menjalankan Docker Compose:
Bangun dan jalankan semua layanan:

docker-compose up --build

# Pengujian
1. Tambahkan data ke Sinatra Service:
curl -X POST http://localhost:4567/users -H "Content-Type: application/json" -d '{"name": "Alice", "email": "alice@example.com"}'

2. Ambil data dari FastAPI Service:
curl http://localhost:8000/order/1

Dengan pengaturan ini, FastAPI Service dapat melakukan permintaan HTTP ke Sinatra Service untuk mengambil data pengguna berdasarkan ID dan mengembalikannya sebagai bagian dari detail pesanan.