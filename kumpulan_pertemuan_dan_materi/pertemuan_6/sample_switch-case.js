// fungsi dengan menggunakan switch case
let switchCalculator = (operasi,angka1,angka2) => {
    switch (operasi){
       case 'pertambahan':
           text = angka1+angka2 ;
           break;
       case 'pengurangan' :
           text = angka1 - angka2 ;
           break;
       default :
  text = 'jenis operasi tidak tersedia'
    }
      return text;
}
console.log(switchCalculator('pengurangan',3,4));