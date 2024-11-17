# Penjelasan Simbol, Command, dan Shortcut Keyboard di WSL Ubuntu

## Simbol

1. **`~` (Tilde)**
    - Simbol ini merujuk ke direktori home pengguna.
    - Contoh :
      ```sh
      cd ~
      ```
      Berpindah ke direktori home pengguna.

2. **`/` (Slash)**
    - Simbol ini merujuk ke direktori root (akar) dari sistem file.
    - Contoh :
      ```sh
      cd /
      ```
      Berpindah ke direktori root.

## Command Navigasi Direktori

1. **`cd` (Change Directory)**
    - Digunakan untuk berpindah direktori.
    - Contoh :
      ```sh
      cd namafolder
      ```
      Berpindah ke direktori `namafolder`.

2. **`cd ..`**
    - Digunakan untuk naik satu tingkat ke direktori induk.
    - Contoh :
      ```sh
      cd ..
      ```
      Berpindah ke direktori induk dari direktori saat ini.

3. **`cd`**
    - Digunakan untuk kembali ke direktori home pengguna.
    - Contoh :
      ```sh
      cd
      ```
      Berpindah ke direktori home pengguna.

## Command Lainnya

1. **`ls` (List)**
    - Digunakan untuk menampilkan daftar file dan direktori dalam direktori saat ini.
    - Contoh :
      ```sh
      ls
      ```
      atau
      ```sh
      ls namaFolder
      ```
      Menampilkan daftar file dan direktori.

2. **`la` (List All)**
    - `la` adalah alias untuk `ls -a`, yang digunakan untuk menampilkan semua file dan direktori, termasuk file tersembunyi (yang diawali dengan titik).
    - Contoh :
      ```sh
      la
      ```
      atau
      ```sh
      la namaFolder
      ```
      Menampilkan semua file dan direktori, termasuk file tersembunyi.

3. **`pwd` (Print Working Directory)**
    - Digunakan untuk menampilkan jalur direktori saat ini.
    - Contoh :
      ```sh
      pwd
      ```
      Menampilkan jalur direktori saat ini.

4. **`cp` (Copy)**
    - Digunakan untuk menyalin file.
    - Contoh :
      ```sh
      cp file1 file2
      ```
      Menyalin `file1` ke `file2`.

5. **`cp -r` (Copy Recursive)**
    - Digunakan untuk menyalin direktori beserta semua isinya secara rekursif.
    - `-r` atau `--recursive` menyalin direktori beserta isinya.
    - Contoh :
      ```sh
      cp -r folder1 folder2
      ```
      Menyalin `folder1` beserta semua file dan subdirektori di dalamnya ke `folder2`.

6. **`mv file2 file3` (Move/Rename File)**
    - Digunakan untuk memindahkan atau mengganti nama file.
    - Contoh :
      ```sh
      mv file2 file3
      ```
      Memindahkan atau mengganti nama `file2` menjadi `file3`.

7. **`mv ~/folder2 ~/folder3/` (Move Directory)**
    - Digunakan untuk memindahkan direktori `folder2` ke dalam direktori `folder3`.
    - Contoh :
      ```sh
      mv ~/folder2 ~/folder3/
      ```
      Memindahkan `folder2` yang berada di direktori home (`~`) ke dalam `folder3` yang juga berada di direktori home. Jika `folder3` tidak ada, `folder2` akan diganti namanya menjadi `folder3`.

8. **`rm` (Remove)**
    - Digunakan untuk menghapus file.
    - Contoh :
      ```sh
      rm file1
      ```
      Menghapus `file1`.

9. **`rm -rf` (Remove Recursive Force)**
    - Digunakan untuk menghapus direktori dan semua isinya secara rekursif dan tanpa konfirmasi.
    - `-r` atau `--recursive` menghapus direktori beserta isinya.
    - `-f` atau `--force` memaksa penghapusan tanpa meminta konfirmasi.
    - Contoh :
      ```sh
      rm -rf folder1
      ```
      Menghapus `folder1` beserta semua file dan subdirektori di dalamnya tanpa konfirmasi.

10. **`mkdir` (Make Directory)**
    - Digunakan untuk membuat direktori baru.
    - Contoh :
      ```sh
      mkdir namafolder
      ```
      Membuat direktori baru dengan nama `namafolder`.

11. **`nano` (Text Editor)**
    - Digunakan untuk membuka dan mengedit file teks di terminal.
    - Contoh :
      ```sh
      nano namafile
      ```
      Membuka `namafile` di editor teks `nano`.

12. **`vim` (Text Editor)**
    - Digunakan untuk membuka dan mengedit file teks di terminal dengan editor teks `vim`.
    - Contoh :
      ```sh
      vim namafile
      ```
      Membuka `namafile` di editor teks `vim`.

13. **`touch` (Create Empty File)**
    - Digunakan untuk membuat file kosong baru atau memperbarui timestamp file yang sudah ada.
    - Contoh :
      ```sh
      touch namafile
      ```
      Membuat file kosong dengan nama `namafile` atau memperbarui timestamp jika file tersebut sudah ada.

## Shortcut Keyboard

1. **`Ctrl + Z`**
    - Digunakan untuk menghentikan sementara proses yang sedang berjalan dan mengembalikannya ke latar belakang.
    - Contoh :
      Tekan `Ctrl + Z` saat proses sedang berjalan.

2. **`Ctrl + C`**
    - Digunakan untuk menghentikan proses yang sedang berjalan.
    - Contoh :
      Tekan `Ctrl + C` saat proses sedang berjalan.

3. **`Shift + I`**
    - Digunakan untuk memasukkan mode insert di editor teks seperti Vim.
    - Contoh :
      Tekan `Shift + I` saat berada di mode normal Vim untuk masuk ke mode insert.

4. **`Ctrl + D`**
    - Digunakan untuk logout dari shell atau menutup terminal.
    - Contoh :
      Tekan `Ctrl + D` untuk logout atau menutup terminal.

## Menggabungkan atau menggunakan Command lebih dari satu
- Anda juga dapat menggunakan beberpa command dengan satu perintah.
- Contoh :
  ```sh
  cd namafolder ls
  ```
  Berpindah ke direktori `namafolder` dan menampilkan daftar file dan direktori di dalamnya.

## Shortcut Keyboard di `nano`

`nano` adalah editor teks yang mudah digunakan di terminal. Berikut adalah beberapa shortcut keyboard yang umum digunakan di `nano` :

1. **`Ctrl + S` (Save)**
    - Digunakan untuk menyimpan file yang sedang dibuka.
    - Contoh :
      Tekan `Ctrl + S` untuk menyimpan perubahan yang telah Anda buat pada file.

2. **`Ctrl + X` (Exit)**
    - Digunakan untuk keluar dari editor `nano`.
    - Contoh :
      Tekan `Ctrl + X` untuk keluar dari `nano`. Jika ada perubahan yang belum disimpan, Anda akan diminta untuk menyimpannya sebelum keluar.

3. **`Ctrl + O` (Write Out)**
    - Digunakan untuk menyimpan file dengan nama yang berbeda atau menyimpan file baru.
    - Contoh :
      Tekan `Ctrl + O`, kemudian masukkan nama file baru dan tekan `Enter` untuk menyimpan.

4. **`Ctrl + W` (Where Is)**
    - Digunakan untuk mencari teks dalam file.
    - Contoh :
      Tekan `Ctrl + W`, kemudian masukkan teks yang ingin Anda cari dan tekan `Enter`.

5. **`Ctrl + K` (Cut Text)**
    - Digunakan untuk memotong teks dari posisi kursor hingga akhir baris.
    - Contoh :
      Tekan `Ctrl + K` untuk memotong teks dari posisi kursor hingga akhir baris. Teks yang dipotong akan disimpan di buffer.

6. **`Ctrl + U` (Uncut Text)**
    - Digunakan untuk menempelkan teks yang telah dipotong atau disalin.
    - Contoh :
      Tekan `Ctrl + U` untuk menempelkan teks dari buffer ke posisi kursor.

7. **`Ctrl + G` (Get Help)**
    - Digunakan untuk membuka menu bantuan `nano`.
    - Contoh :
      Tekan `Ctrl + G` untuk membuka menu bantuan yang berisi informasi tentang shortcut keyboard dan penggunaan `nano`.

8. **`Ctrl + C` (Current Position)**
    - Digunakan untuk menampilkan posisi kursor saat ini (baris dan kolom).
    - Contoh :
      Tekan `Ctrl + C` untuk menampilkan posisi kursor saat ini di bagian bawah layar.

9. **`Ctrl + Y` (Previous Page)**
    - Digunakan untuk menggulir ke halaman sebelumnya dalam file.
    - Contoh :
      Tekan `Ctrl + Y` untuk menggulir ke halaman sebelumnya.

10. **`Ctrl + V` (Next Page)**
    - Digunakan untuk menggulir ke halaman berikutnya dalam file.
    - Contoh :
      Tekan `Ctrl + V` untuk menggulir ke halaman berikutnya.

11. **`Ctrl + _` (Go to Line)**
    - Digunakan untuk berpindah ke baris tertentu dalam file.
    - Contoh :
      Tekan `Ctrl + _`, kemudian masukkan nomor baris dan tekan `Enter` untuk berpindah ke baris tersebut.

12. **`Ctrl + \` (Replace)**
    - Digunakan untuk mengganti teks dalam file.
    - Contoh :
      Tekan `Ctrl + \`, kemudian masukkan teks yang ingin diganti dan teks penggantinya, lalu tekan `Enter`.

13. **`Ctrl + T` (To Spell)**
    - Digunakan untuk memeriksa ejaan teks dalam file.
    - Contoh :
      Tekan `Ctrl + T` untuk memeriksa ejaan teks dari posisi kursor.

14. **`Ctrl + J` (Justify)**
    - Digunakan untuk merapikan teks dalam file.
    - Contoh :
      Tekan `Ctrl + J` untuk merapikan teks dari posisi kursor hingga akhir paragraf.

15. **`Ctrl + M` (Insert Newline)**
    - Digunakan untuk memasukkan baris baru di posisi kursor.
    - Contoh :
      Tekan `Ctrl + M` untuk memasukkan baris baru di posisi kursor.

16. **`Ctrl + D` (Delete Character)**
    - Digunakan untuk menghapus karakter di posisi kursor.
    - Contoh :
      Tekan `Ctrl + D` untuk menghapus karakter di posisi kursor.

17. **`Ctrl + ^` (Mark Text)**
    - Digunakan untuk menandai teks dari posisi kursor.
    - Contoh :
      Tekan `Ctrl + ^` untuk mulai menandai teks, kemudian pindahkan kursor untuk menandai teks yang diinginkan.

18. **`Ctrl + Shift + -` (Undo)**
    - Digunakan untuk membatalkan tindakan terakhir.
    - Contoh :
      Tekan `Ctrl + Shift + -` untuk membatalkan tindakan terakhir.

## Shortcut Keyboard di `vim`

`vim` adalah editor teks yang kuat dan serbaguna yang digunakan di terminal. Berikut adalah beberapa shortcut keyboard yang umum digunakan di `vim` :

### Mode di `vim`

1. **Normal Mode**
    - Mode default saat Anda membuka `vim`. Digunakan untuk navigasi dan manipulasi teks.
    - Untuk masuk ke Normal Mode dari mode lain, tekan `Esc`.

2. **Insert Mode**
    - Mode untuk memasukkan teks.
    - Untuk masuk ke Insert Mode dari Normal Mode, tekan `i`.

3. **Visual Mode**
    - Mode untuk memilih teks.
    - Untuk masuk ke Visual Mode dari Normal Mode, tekan `v`.

4. **Command Mode**
    - Mode untuk menjalankan perintah.
    - Untuk masuk ke Command Mode dari Normal Mode, tekan `:`.

### Shortcut di Normal Mode

1. **Navigasi**
    - `h` : Pindah satu karakter ke kiri.
    - `j` : Pindah satu baris ke bawah.
    - `k` : Pindah satu baris ke atas.
    - `l` : Pindah satu karakter ke kanan.
    - `w` : Pindah ke awal kata berikutnya.
    - `b` : Pindah ke awal kata sebelumnya.
    - `0` : Pindah ke awal baris.
    - `$` : Pindah ke akhir baris.
    - `gg` : Pindah ke awal file.
    - `G` : Pindah ke akhir file.

2. **Manipulasi Teks**
    - `x` : Menghapus karakter di bawah kursor.
    - `dd` : Menghapus baris saat ini.
    - `yy` : Menyalin baris saat ini.
    - `p` : Menempelkan teks yang telah disalin atau dipotong setelah kursor.
    - `u` : Membatalkan tindakan terakhir (undo).
    - `Ctrl + r` : Mengulangi tindakan yang dibatalkan (redo).

3. **Masuk ke Insert Mode**
    - `i` : Masuk ke Insert Mode sebelum kursor.
    - `I` : Masuk ke Insert Mode di awal baris.
    - `a` : Masuk ke Insert Mode setelah kursor.
    - `A` : Masuk ke Insert Mode di akhir baris.
    - `o` : Membuat baris baru di bawah baris saat ini dan masuk ke Insert Mode.
    - `O` : Membuat baris baru di atas baris saat ini dan masuk ke Insert Mode.

4. **Visual Mode**
    - `v` : Masuk ke Visual Mode untuk memilih teks karakter demi karakter.
    - `V` : Masuk ke Visual Line Mode untuk memilih teks baris demi baris.
    - `Ctrl + v` : Masuk ke Visual Block Mode untuk memilih teks dalam blok.

### Shortcut di Insert Mode

1. **Navigasi**
    - `Esc` : Kembali ke Normal Mode.

### Shortcut di Visual Mode

1. **Manipulasi Teks**
    - `d` : Menghapus teks yang dipilih.
    - `y` : Menyalin teks yang dipilih.
    - `p` : Menempelkan teks yang telah disalin atau dipotong setelah kursor.

### Shortcut di Command Mode

1. **Perintah Umum**
    - `:w` : Menyimpan file.
    - `:q` : Keluar dari `vim`.
    - `:wq` : Menyimpan file dan keluar dari `vim`.
    - `:q!` : Keluar dari `vim` tanpa menyimpan perubahan.
    - `:e filename` : Membuka file `filename`.
    - `:set number` : Menampilkan nomor baris.
    - `:set nonumber` : Menyembunyikan nomor baris.