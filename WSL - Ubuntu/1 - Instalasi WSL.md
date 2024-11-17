# Instalasi WSL di Windows 10 dan Windows 11
1. Buka **Settings** (Pengaturan).
2. Pilih **Apps**.
3. Pilih **Optional features** (Fitur opsional).
4. Scroll ke bawah dan pilih **More Windows features** (Fitur Windows lainnya).
5. Centang **Windows Subsystem for Linux** dan klik **OK**.
6. Restart komputer Anda jika diminta.
7. Buka **Microsoft Store** dan cari distribusi Linux yang diinginkan (misalnya, Ubuntu) dan klik **Install**.
8. Buka **Microsoft Store** dan cari Terminal dan klik **Install**.

## Mengatur WSL & Ubuntu

1. Buka **PowerShell** sebagai Administrator.
2. Jalankan perintah berikut untuk mengatur versi WSL default ke WSL2:
   ```sh
   wsl --set-default-version 2
   ```
3. Jalankan perintah berikut untuk mengatur default user Ubuntu ke root :
   ```sh
   ubuntu config --default-user root
   ```

   atau
   
   ```sh
   ubuntu.exe config --default-user root
   ```