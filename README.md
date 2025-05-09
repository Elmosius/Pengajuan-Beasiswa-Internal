# 🚀 Pengajuan Beasiswa Internal

Selamat datang di repositori GitHub kami untuk Tugas Besar Ujian Akhir Semester mata kuliah Pemrograman Web Lanjut. Kami adalah Kelompok 1 yang terdiri dari:

- 2272008 - Elmosius Suli - Elmosius
- 2272016 - Christopher Wijaya - Chris0634

## 🎯 Tujuan

Kami diminta membuat sebuah aplikasi web untuk melakukan pengajuan beasiswa internal dengan studi kasus di Fakultas Teknologi Informasi Universitas Kristen Maranatha. Terdapat 4 role pengguna dalam aplikasi ini yaitu administrator, mahasiswa, pengguna program studi (ketua program studi), dan pengguna fakultas (dekan, wakil dekan).

## 📋 Fungsi Pengguna

Berikut adalah hal yang dapat dilakukan oleh masing-masing pengguna:

- **Administrator**: Menambahkan data fakultas, data program studi, data pengguna aplikasi web, data jenis beasiswa internal.
- **Mahasiswa**: Menambahkan, melihat, mengubah, dan menghapus dokumen pengajuan beasiswa. Dalam satu semester, setiap mahasiswa hanya dapat mengajukan 1x pengajuan beasiswa (beasiswa prestasi atau bantuan ekonomi). Hanya mahasiswa aktif yang diizinkan untuk mengajukan beasiswa.
- **Fakultas**: Melakukan manajemen data periode pengajuan beasiswa, dapat melihat daftar mahasiswa yang mengajukan mahasiswa per periode dan dapat melakukan approval dari pengajuan beasiswa selama pengajuan beasiswa tersebut sudah disetujui oleh program studi.
- **Program Studi**: Melihat daftar pengajuan beasiswa oleh mahasiswa per periode dan dapat melakukan approval dari pengajuan beasiswa.

## 📚 Daftar Branch

- Main
- Cadangan

## ⚙️ Teknologi yang dipakai

- Tailwind
- Vue.js
- Vite
- NodeJs
- MySQL 
- ExpressJs
- Postman
- Bcrypt
- Joi
- Jwt (jsonwebtoken)
- Multer

## 💻 Demo
- Coming Soon

## ⚠️ Instalasi
Berikut langkah-langkah untuk menginstal dan menjalankan aplikasi:
1. Clone repository:
```
git clone https://github.com/Elmosius/Project-UAS-PWL.git
```
2. Instal module pada folder back-end dan main:
```
npm install
```
3. Salin file .env.example menjadi .env dan sesuaikan konfigurasi database di folder back-end:
```
cp .env.example .env
```
4. Jalankan server back-end :
```
nodemon . atau node .
```
5. Jalankan server front-end :
```
npm run dev
```
