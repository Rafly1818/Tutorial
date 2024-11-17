# Langkah-langkah Setup WSL Ubuntu

## Update dan Upgrade Sistem
1. Buka terminal WSL Ubuntu.
2. Jalankan perintah berikut untuk memperbarui daftar paket dan meng-upgrade paket yang sudah diinstal :
   ```sh
   sudo apt update && sudo apt upgrade -y
   ```

## Install Python3 & Pip3
   ```sh
   sudo apt install python3 python3-pip -y
   ```

## Install PlantUML
   ```sh
   sudo apt install plantuml -y
   ```

## Install Java/JDK
1. Jalankan perintah berikut untuk menginstal Java Development Kit (JDK) :
   ```sh
   sudo apt install default-jdk -y
   ```
2. Verifikasi instalasi Java dengan menjalankan perintah berikut :
   ```sh
   java --version
   ```