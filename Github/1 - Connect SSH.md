# Langkah-langkah Mengkoneksikan Akun GitHub Menggunakan SSH di WSL Ubuntu

1. **Buka Terminal WSL Ubuntu**
    - Buka terminal WSL Ubuntu dari Start Menu atau dengan mengetik `wsl` di Terminal atau PowerShell.

2. **Periksa Kunci SSH yang Ada**
    - Jalankan perintah berikut untuk memeriksa apakah Anda sudah memiliki kunci SSH:
      ```sh
      ls -al ~/.ssh
      ```
    - Jika Anda melihat file `id_rsa` dan `id_rsa.pub`, Anda sudah memiliki kunci SSH. Jika tidak, lanjutkan ke langkah berikutnya untuk membuat kunci SSH baru.

3. **Membuat Kunci SSH Baru**
    - Jalankan perintah berikut untuk membuat kunci SSH baru:
      ```sh
      ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
      ```
    - Gantilah `"your_email@example.com"` dengan email yang Anda gunakan untuk akun GitHub Anda.
    - Ketika diminta untuk "Enter a file in which to save the key", tekan `Enter` untuk menerima lokasi default.
    - Ketika diminta untuk "Enter passphrase", tekan `Enter` jika Anda tidak ingin menggunakan passphrase.

4. **Menambahkan Kunci SSH ke Agen SSH**
    - Jalankan perintah berikut untuk memulai agen SSH:
      ```sh
      eval "$(ssh-agent -s)"
      ```
    - Tambahkan kunci SSH Anda ke agen SSH:
      ```sh
      ssh-add ~/.ssh/id_rsa
      ```

5. **Menyalin Kunci SSH ke Clipboard**
    - Jalankan perintah berikut untuk menyalin kunci SSH ke clipboard:
      ```sh
      cat ~/.ssh/id_rsa.pub
      ```
    - Salin output dari perintah ini (kunci SSH Anda).

6. **Menambahkan Kunci SSH ke Akun GitHub**
    - Buka [GitHub](https://github.com) dan masuk ke akun Anda.
    - Klik foto profil Anda di pojok kanan atas dan pilih **Settings**.
    - Di sidebar kiri, pilih **SSH and GPG keys**.
    - Klik tombol **New SSH key**.
    - Berikan judul untuk kunci SSH Anda di field "Title".
    - Tempel kunci SSH yang telah Anda salin ke field "Key".
    - Klik tombol **Add SSH **key.

7. **Mengkonfirmasi Koneksi SSH ke GitHub**
    - Jalankan perintah berikut untuk mengkonfirmasi bahwa Anda dapat terhubung ke GitHub menggunakan SSH:
      ```sh
      ssh -T git@github.com
      ```
    - Jika ini adalah pertama kalinya Anda terhubung ke GitHub menggunakan SSH, Anda akan diminta untuk mengkonfirmasi koneksi. Ketik `yes` dan tekan `Enter`.