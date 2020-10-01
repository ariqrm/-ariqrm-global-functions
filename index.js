/**
 * @ariqrm/global-functions
 *
 * @version 0.1.0
 * @author [Muhammad Ari Qoiriman](https://github.com/ariqrm)
 * 
 */

"use strict";

module.exports.formatMoney =(number,places,symbol,thousand,decimal)=>{
  number = number || 0;
  places = !isNaN(places = Math.abs(places)) ? places : 0;
  symbol = symbol !== undefined ? symbol : "";
  thousand = thousand || ".";
  decimal = decimal || ",";
  let negative,i,j
  negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}

module.exports.toCurrency =(number,decimal)=>{
  let money
  number = parseFloat(number);
  money = this.formatMoney(number, decimal);
  return money;
}

module.exports.validateEmail = (email)=>{
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

module.exports.toFloat =(number)=>{
  try {
    return parseFloat(number)
  } catch (e) {
    return 0
  }
}

module.exports.getSekarang = (date, dateonly)=>{
  let d = (date) ? date : new Date()
  let month = 0;
  if (d.getMonth() == 12) {
    month = 1
  } else {
    month = d.getMonth() + 1
  }

  let tgl = d.getFullYear() + "-" + this.cekNo(month) + "-" + this.cekNo(d.getDate())
  let waktu = this.cekNo(d.getHours()) + ":" + this.cekNo(d.getMinutes()) + ":" + this.cekNo(d.getSeconds())

  return dateonly ? tgl : tgl + " " + waktu
}

module.exports.getTGLFULL = (date)=>{
  if (!date) return ""
  let tgl = date.split(" ")
  let tglsplit = tgl[0].split("-")
  let bulan = tglsplit[1]
  let tahun = tglsplit[0]
  let tanggal = tglsplit[2]

  let waktusplit = tgl[1].split(":")
  let jam = waktusplit[0]
  let menit = waktusplit[1]

  return tanggal + " " + this.getBulan(bulan) + " " + tahun + ", " + jam + ":" + menit
}

module.exports.getTGLSimpel = (date)=>{
  let now = this.getSekarang()
  let input = date.split(" ")
  let def = now.split(" ")
  if (def[0] == input[0]) {
    return input[1].substring(0, 5)
  } else {
    input = input[0].split("-")
    let inputtgl = input[2]
    let inputbln = input[1]
    return inputtgl + "/" + inputbln
  }
}

module.exports.getDistance = (alamat, distance)=>{
  if (distance == "null" || distance == null) {
    return alamat
  } else {
    if (parseFloat(distance) < 1) {
      distance = toCurrency(distance.substring(2, 5), 0) + " M dari lokasi Anda";
    } else {
      distance = toCurrency(distance, 2) + " KM";
    }
    return "± " + distance
  }
}

module.exports.cekNo = (number)=>{
  if (number < 10) {
    return "0" + number
  } else {
    return number
  }
}

module.exports.getBulan = (bln)=>{
  bln = parseInt(bln)
  let res = ""
  if (bln == 1) {
    res = "Januari"
  } else if (bln == 2) {
    res = "Februari"
  } else if (bln == 3) {
    res = "Maret"
  } else if (bln == 4) {
    res = "April"
  } else if (bln == 5) {
    res = "Mei"
  } else if (bln == 6) {
    res = "Juni"
  } else if (bln == 7) {
    res = "Juli"
  } else if (bln == 8) {
    res = "Agustus"
  } else if (bln == 9) {
    res = "September"
  } else if (bln == 10) {
    res = "Oktober"
  } else if (bln == 11) {
    res = "November"
  } else if (bln == 12) {
    res = "Desember"
  }
  return res
}

module.exports.getHari = (index)=>{
  let hari = "" ;
  if (index == 0){
    hari = "Minggu" ;
  } else if (index == 1){
    hari = "Senin" ;
  } else if (index == 2){
    hari = "Selasa" ;
  } else if (index == 3){
    hari = "Rabu" ;
  } else if (index == 4){
    hari = "Kamis" ;
  } else if (index == 5){
    hari = "Jumat" ;
  } else if (index == 6){
    hari = "Sabtu" ;
  }
  return hari
}

module.exports.getBulanSingkat = (bln)=>{
  bln = parseInt(bln)
  let res = ""
  if (bln == 1) {
    res = "Jan"
  } else if (bln == 2) {
    res = "Feb"
  } else if (bln == 3) {
    res = "Mar"
  } else if (bln == 4) {
    res = "Apr"
  } else if (bln == 5) {
    res = "Mei"
  } else if (bln == 6) {
    res = "Jun"
  } else if (bln == 7) {
    res = "Jul"
  } else if (bln == 8) {
    res = "Ags"
  } else if (bln == 9) {
    res = "Sep"
  } else if (bln == 10) {
    res = "Okt"
  } else if (bln == 11) {
    res = "Nov"
  } else if (bln == 12) {
    res = "Des"
  }
  return res
}

module.exports.isValidURL = (str)=>{
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

module.exports.wordWrap = (str, width)=>str.replace(
  new RegExp(`(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`, 'g'), '$1\n'
)

module.exports.calcDistance = (latFrom, lonFrom, latTo, lonTo)=>{
  // Try edit message
  if (typeof Number.prototype.toRadians == "undefined") {
    Number.prototype.toRadians = function() {
      return (this * Math.PI) / 180
    }
  }

  var R = 6371e3 // metres

  var latRad1 = (latFrom * Math.PI) / 180
  var latRad2 = (latTo * Math.PI) / 180
  var latDiff = (latTo - latFrom).toRadians()
  var lonDiff = (lonTo - lonFrom).toRadians()

  var a =
  Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
  Math.cos(latRad1) *
    Math.cos(latRad2) *
    Math.sin(lonDiff / 2) *
    Math.sin(lonDiff / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = ((R * c) / 1000).toFixed(2)
  return d
}

module.exports.formatDateString = date=>{
  let split = date.split(" ")
  let tgl = split[0]
  let jamMenit = split[1]
  let jamMenitSplit = jamMenit.split(":")
  let jam = cekNo(parseInt(jamMenitSplit[0]))
  let menit = cekNo(parseInt(jamMenitSplit[1]))
  return `${tgl}T${jam}:${menit}`
}

module.exports.setStateAsync =instance=>state=>
  new Promise(resolve=>{
  instance.setState(state, ()=>resolve(instance.state))
  })

module.exports.terbilang =(value)=>{
  var bilangan=value;
  var kalimat="";
  var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
  var kata  = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
  var tingkat = new Array('','Ribu','Juta','Milyar','Triliun');
  var panjang_bilangan = bilangan.length;
   
  /* pengujian panjang bilangan */
  if(panjang_bilangan > 15){
    kalimat = "Diluar Batas";
  }else{
    /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
    for(i = 1; i <= panjang_bilangan; i++) {
      angka[i] = bilangan.substr(-(i),1);
    }
     
    var i = 1;
    var j = 0;
     
    /* mulai proses iterasi terhadap array angka */
    while(i <= panjang_bilangan){
      subkalimat = "";
      kata1 = "";
      kata2 = "";
      kata3 = "";
       
      /* untuk Ratusan */
      if(angka[i+2] != "0"){
        if(angka[i+2] == "1"){
          kata1 = "Seratus";
        }else{
          kata1 = kata[angka[i+2]] + " Ratus";
        }
      }
       
      /* untuk Puluhan atau Belasan */
      if(angka[i+1] != "0"){
        if(angka[i+1] == "1"){
          if(angka[i] == "0"){
            kata2 = "Sepuluh";
          }else if(angka[i] == "1"){
            kata2 = "Sebelas";
          }else{
            kata2 = kata[angka[i]] + " Belas";
          }
        }else{
          kata2 = kata[angka[i+1]] + " Puluh";
        }
      }
       
      /* untuk Satuan */
      if (angka[i] != "0"){
        if (angka[i+1] != "1"){
          kata3 = kata[angka[i]];
        }
      }
       
      /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
      if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")){
        subkalimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
      }
       
      /* gabungkan variabe sub kalimat (untuk Satu blok 3 angka) ke variabel kalimat */
      kalimat = subkalimat + kalimat;
      i = i + 3;
      j = j + 1;
    }
     
    /* mengganti Satu Ribu jadi Seribu jika diperlukan */
    if ((angka[5] == "0") && (angka[6] == "0")){
      kalimat = kalimat.replace("Satu Ribu","Seribu");
    }
  }
  let kalimatterbilang = kalimat.replace(/  +/g, " ")
  return kalimatterbilang.trim() + " Rupiah";
}

module.exports.nullOrUndefined = val=>{
  return val == null || val == undefined
}

module.exports.empty = val=>{
  return val == "" || val == null || val == undefined || val == 0 || val == "0"
}

module.exports.firstUppercase = str=>{
  let split,words,clause,i
  if (empty(str)) {
    return str
  } else if (str.includes(' ')) {
    words = str.split(' ')
    for (i = 0; i < words.length; i++) {
      split = words[i].split('')
      split[0] = split[0].toUpperCase()
      clause += split.join('')
      if (i==words.length) {
        return clause
      }
    }
  } else {
    split = str.split('')
    split[0] = split[0].toUpperCase()
    return split.join('')
  }
}

module.exports.persamaanKata = (str1,str2)=>{
  let regEx = new RegExp(str2, "gi")
  return !nullOrUndefined(str1) && str1.match(regEx)
}

module.exports.oneOf =(operand, ...val)=>{
  let inArray = false;
  for (let i = 0; i < val.length; i++) {
    if (val[i] == operand) {
      inArray = true;
      break;
    }
  }
  return inArray;
};

module.exports.pembulatan =(num, jumlahangkadibelakangkoma)=>{
  if (!num) return 0;
  let jum = 100
  if (jumlahangkadibelakangkoma){
    jum = Math.pow(10, jumlahangkadibelakangkoma)
  } 
  return Math.round((num + Number.EPSILON) * jum) / jum
}

module.exports.about =()=>{
  return `First package ariqrm`
}
