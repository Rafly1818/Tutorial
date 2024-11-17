# Langkah-langkah Membuat Repository Baru dan Push ke GitHub

## Membuat Repository Baru di GitHub

1. **Buka GitHub**
    - Buka [GitHub](https://github.com) dan masuk ke akun Anda.

2. **Buat Repository Baru**
    - Klik ikon `+` di pojok kanan atas dan pilih **New repository**.
    - Isi nama repository di field "Repository name".
    - Tambahkan deskripsi (opsional) di field "Description".
    - Pilih **Public** atau **Private** sesuai kebutuhan Anda.
    - Centang **Initialize this repository with a README** jika Anda ingin memulai dengan file README.
    - Klik tombol **Create repository**.

## Menghubungkan Repository Lokal dengan Repository GitHub

1. **Buka Terminal WSL Ubuntu**
    - Buka terminal WSL Ubuntu dari Start Menu atau dengan mengetik `wsl` di Command Prompt atau PowerShell.

2. **Navigasi ke Direktori Proyek**
    - Pindah ke direktori proyek Anda atau buat direktori baru :
      ```sh
      cd /path/to/your/project
      ```
      atau
      ```sh
      mkdir /path/to/your/project
      cd /path/to/your/project
      ```

3. **Konfigurasi Nama dan Email Git (Untuk Pertama Kali)**
    - Konfigurasi nama pengguna dan email GitHub Anda :
      ```sh
      git config --global user.name "Your Name"
      git config --global user.email "your_email@example.com"
      ```

4. **Mengatur Default Branch di Konfigurasi Global Git (Untuk Pertama Kali)**
    - Jalankan perintah berikut untuk mengatur default branch ke `main` di konfigurasi global Git :
      ```sh
      git config --global init.defaultBranch main
      ```
5. **Tambahkan File ke Staging Area**
    - Tambahkan semua file ke staging area :
      ```sh
      git add .
      ```

6. **Buat Commit**
    - Buat commit dengan pesan deskriptif :
      ```sh
      git commit -m "first commit"
      ```

7. **Mengatur Branch Default ke `main`**
    - Jalankan perintah berikut untuk mengatur branch default ke `main` :
      ```sh
      git branch -M main
      ```

8. **Tambahkan Remote Repository**
    - Tambahkan remote repository GitHub yang baru saja Anda buat :
      ```sh
      git remote add origin git@github.com:username/repository.git
      ```
      Gantilah `username` dengan nama pengguna GitHub Anda dan `repository` dengan nama repository yang Anda buat.

9. **Push Perubahan ke GitHub**
    - Push perubahan ke branch `main` di remote repository :
      ```sh
      git push -u origin main
      ```