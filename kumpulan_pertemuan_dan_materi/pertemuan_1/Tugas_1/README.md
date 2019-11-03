### Langkah-langkah awal belajar github
**[mendaftar akun](#mendaftar-akun)**<br>
**[setup ssh github](#setup-ssh-github)**<br>
**[membuat repository](#membuat-repository)**<br>
**[cara push ke remote repository](#cara-push-ke-remote-repository)**<br>


## mendaftar akun
1. git config --global user.name "wali91"
2. git config --global user.email wlrhmn@gmail.com

## setup ssh github
1. Membuat Key SSH
* Jalankan perintah ssh-keygen pada termnial. Kemudian inputkan id (identitas) SSH terserah
2. Jalankan SSH Angen dan Load SSH Key
* Untuk memastikan apakah SSH Agent sudah berajalan atau tidak, gunakan perintah ini: ps -e | grep [s]sh-agent Berikutnya kita Load SSH Key. Gunakan perintah: ssh-add ~/.ssh/id_anda
3. Tambahkan SSH Key ke Github
* cat ~/.ssh/id_anda.pub
4. Uji Konektivitas
* Ketik perintah berikut untuk menguji konektivitas SSH ke Github :ssh -T git@github.com

## membuat repository
1. Pembuatan repositori dapat dilakukan dengan perintah git init nama directory contoh : git init belajar-git

## cara push ke remote repository
1. git push original master
* Keterangan:
    * original adalah nama remote.
    * master adalah nama cabang tujuan.
