// membuat oerator penjumlahan menggunakan if else
function calculator(operasi,angka1,angka2)
{
let result = '';
if (operasi === "pertambahan")
{
    result = angka1 + angka2
}
else if(operasi === "perkalian")
{
    result = angka1 * angka2
}
else if(operasi === "ekponensial")
{
    result = angka1 ** angka2
}
else if(operasi === "pengurangan")
{
    result = angka1 - angka2
}
else
{
    return 'nama operasi tidak tersedia';
}
return `hasil ${operasi} ${angka1} dan ${angka2} adalah ${result}`;
}
console.log(calculator("perkalian" ,1,4));
console.log(calculator("pertambahan",20,5));
console.log(calculator("ekponensial",2,5));
console.log(calculator("pengurangan",5,2));



