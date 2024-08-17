# Movie Studio

Movie Studio adalah sebuah aplikasi web yang memungkinkan pengguna mencari film dan mendapatkan detail informasi tentang film yang dicari. Aplikasi ini menggunakan API OMDb untuk mengakses data film dan menampilkan hasil pencarian dalam bentuk kartu. Pengguna juga dapat melihat detail film dengan mengklik tombol "Details" pada setiap kartu film.

## Fitur

- **Pencarian Film**: Mencari film dengan menggunakan input teks dan tombol pencarian.
- **Menampilkan Hasil Pencarian**: Menampilkan hasil pencarian film dalam bentuk kartu dengan poster, judul, dan tahun rilis.
- **Detail Film**: Melihat detail film yang lebih mendalam dalam modal ketika tombol "Details" diklik.
- **Pagination**: Navigasi melalui hasil pencarian dengan tombol untuk halaman berikutnya dan sebelumnya.

## Teknologi

- **HTML**: Struktur dasar halaman web.
- **CSS**: Styling dan layout halaman.
- **JavaScript**: Interaksi dan logika aplikasi.
- **Axios**: Library untuk melakukan permintaan HTTP ke API OMDb.
- **OMDb API**: API untuk mengambil data film.

## Instalasi

1. **Clone Repository**:

   ```bash
   git clone <URL_REPOSITORY>
   cd <NAMA_FOLDER_REPOSITORY>
   ```
2. **Jalankan Aplikasi**:

   Buka file `index.html` di browser Anda.

## Cara Menggunakan

1. **Pencarian Film**:
   - Masukkan nama film di kolom pencarian dan klik tombol pencarian.
   - Hasil pencarian akan ditampilkan dalam bentuk kartu di bawah kolom pencarian.

2. **Melihat Detail Film**:
   - Klik tombol "Details" pada kartu film untuk melihat informasi lebih lanjut di modal.
   - Tutup modal dengan mengklik tombol tutup (X) di sudut kanan atas modal.

3. **Navigasi Halaman**:
   - Gunakan tombol "Previous Page" dan "Next Page" untuk menavigasi hasil pencarian.