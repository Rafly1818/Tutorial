# Langkah-langkah Menghubungkan Repository Lama ke WSL Ubuntu

## Login ke GitHub

1. **Buka GitHub**
    - Buka [GitHub](https://github.com) dan masuk ke akun Anda.

## Buka Repository Lama

2. **Navigasi ke Repository Lama**
    - Setelah login, navigasi ke repository lama yang ingin Anda hubungkan ke WSL Ubuntu.
    - Klik nama repository tersebut untuk membukanya.

## Salin URL SSH Repository

3. **Salin URL SSH**
    - Di halaman repository, klik tombol **Code**.
    - Pilih **SSH** dan salin URL SSH yang ditampilkan (misalnya, `git@github.com:username/repository.git`).

## Clone Repository ke WSL Ubuntu

4. **Buka Terminal WSL Ubuntu**
    - Buka terminal WSL Ubuntu dari Start Menu atau dengan mengetik `wsl` di Command Prompt atau PowerShell.

5. **Navigasi ke Direktori Tempat Anda Ingin Menyimpan Repository**
    - Pindah ke direktori tempat Anda ingin menyimpan repository :
      ```sh
      cd /path/to/your/directory
      ```

6. **Clone Repository**
    - Jalankan perintah berikut untuk meng-clone repository menggunakan URL SSH yang telah Anda salin :
      ```sh
      git clone git@github.com:username/repository.git
      ```
      Gantilah `username` dengan nama pengguna GitHub Anda dan `repository` dengan nama repository yang Anda clone.