// Fungsi 
// function myProfile
// membuat function dengan 3 parameter

 let myProfile = ((nama,umur,hobi) => {
    if (umur <= 56) {
        console.log('nama saya' + " " + nama + " " + 'saya masih aktif bekerja dan umur saya' +" " + umur + " "+'tahun'+" "+ 'saya hobi'+" " + hobi);
    } else {
        console.log('nama saya' + " " +nama + " " + 'saya sudah pensiun dan umur saya' + " " + umur + " " + 'tahun' + " " + 'saya hobi'+ " "  + hobi);
    }
});
// memanggil function dan memasukan 3 parameter
myProfile("Bambang",30,"memancing");
myProfile("Bambang",80,"memancing");