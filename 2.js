   function cetak_gambar(panjang){
     //menentukan batasan tengah dari gambar
      var batastengah = Math.round(panjang / 2);
      //gambar untuk tepian
      var tepian = '* ';
      //gambar untuk dalaman
      var dalaman = '= ';
      //hasil yang akan ditampilkan
      var cetak;

      //mengecek jika parameter "panjang" merupakan bilangan ganjil
      if (panjang%2!==0){
        //meng iterasi 
        for (var i = 1; i <= panjang; i++) {
            //mengecek jika bilangan pada tepian adalah batastengah atau bukan
            if (i === batastengah) {
                //mencetak jumlah yang akan ditampilkan dengan Array() method dan membuatnya menjadi sebuah string dengan metode .join()
                cetak = Array(panjang + 1).join(tepian);
            } else {
                //mencetak tepian secara terpisah kemudian digabungkan dengan dalaman
                cetak = tepian + Array(panjang - 1).join(dalaman) + tepian;
            }
            //mencentak ke console
            console.log(cetak);
        }
      }else{
        //mencetak message ke konsol jika bilangan genap
        console.log("Maaf, Bilangan harus ganjil!!")
      }
      
   }
    //meminta input dengan readline()
    var panjang = prompt("masukan panjang gambar yang diinginkan: ");
   //memanggil fungsi dan merubah input user menjadi integer
   cetak_gambar(parseInt(panjang));
   
    

    