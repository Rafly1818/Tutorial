# Langkah-langkah Setup WSL Ubuntu 2

## Install Zsh di Ubuntu

1. **Install Zsh**
    ```bash
    sudo apt install zsh
    ```

2. **Install Oh My Zsh**
    ```bash
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

3. **Download zsh-autosuggestions**
    ```bash
    git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
    ```

4. **Download zsh-syntax-highlighting**
    ```bash
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
    ```

5. **Konfigurasi Zsh**
    - Buka file konfigurasi Zsh :
      ```sh
      nano ~/.zshrc
      ```
    - Lalu cari :
      ```sh
      plugins=(git)
      ```
    - Kemudian ganti dengan :
      ```sh
      plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
      ```

6. **Memuat Ulang**
    ```sh
    source ~/.zshrc
    ```