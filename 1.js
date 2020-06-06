function divideAndSort (angka){
    //merubah integer menjadi string;
    var angkaToString = angka.toString();
    //iterasi per karakter
    var i = 0;
    var text = "";
    while ( i < angkaToString.length){
      i++;
      //check per character jika terdapat 0 dan men "skip nya"
      if(angkaToString.charAt(i)=== "0"){
        continue;
      }
      
      //membuat iterasi menjadi satu baris
      text += angkaToString.charAt(i); 
    }
    
    //mengembalikan hasil fungsi
    return parseInt(text);
    
    
}

divideAndSort(5476897095805);


