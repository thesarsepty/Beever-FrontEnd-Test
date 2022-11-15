/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
    // Write your code here
  const historyOfEachDay = history.split('.')
  let result = {}
  let totalTabungan = 0

  historyOfEachDay.forEach( el => {
    let modalHarian = 10000
    let temp = {}
    let day = el.split('-')
    if(!temp[day[0]]){
      temp[day[0]] = day[1].split(',') 
    }
    temp[day[0]].forEach(el => {
      for(let i = 0; i < listHarga.length; i++){
        if(el === listHarga[i].nama){
          modalHarian -= listHarga[i].harga
        }
      }
    })
    
    if(!result[day[0]]){
      result[day[0]] = modalHarian
      totalTabungan += modalHarian
    }
  });
  const output = {...result, totalTabungan}
  return output
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))