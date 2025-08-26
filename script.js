var opened = false;

function openMoreBar() {
    var moreBar = document.getElementById("more-bar");
    
    if (!opened) {
        opened = true;
        moreBar.style.display = "block";
    } else {
        opened = false;
        moreBar.style.display = "none";
    }
}

function klaimGaransi() {
    var nomor1 = "6281311927097"
    var nomor2 = "6282135322295"
    var nomor3 = "6289654045193"
    
    var inputnama = document.getElementById("atas-nama").value;
    var inputkeluhan = document.getElementById("keluhan-saya").value;
    var layanan = document.getElementById("garansi-layanan").value;
    
    var link1 = "https://wa.me/"+nomor1+"?text="+encodeURIComponent("Saya ingin klaim garansi:")+"%0A"+encodeURIComponent("Atas Nama:")+"%20"+encodeURIComponent(inputnama)+"%0A"+encodeURIComponent("Keluhan Saya:")+"%20"+encodeURIComponent(inputkeluhan)+"%0A"+encodeURIComponent("Layanan: Mozes Site");
    var link2 = "https://wa.me/"+nomor2+"?text="+encodeURIComponent("Saya ingin klaim garansi:")+"%0A"+encodeURIComponent("Atas Nama:")+"%20"+encodeURIComponent(inputnama)+"%0A"+encodeURIComponent("Keluhan Saya:")+"%20"+encodeURIComponent(inputkeluhan)+"%0A"+encodeURIComponent("Layanan: Julius Site");
    var link3 = "https://wa.me/"+nomor3+"?text="+encodeURIComponent("Saya ingin klaim garansi:")+"%0A"+encodeURIComponent("Atas Nama:")+"%20"+encodeURIComponent(inputnama)+"%0A"+encodeURIComponent("Keluhan Saya:")+"%20"+encodeURIComponent(inputkeluhan)+"%0A"+encodeURIComponent("Layanan: Nasha Site");
    
    if(layanan=="mozesite"){
        window.open(link1);
    } else if(layanan=="juliusite") {
        window.open(link2);
    } else if(layanan=="nashasite") {
        window.open(link3);
    } else if(inputnama=="" && inputkeluhan=="" && layanan==""){
        alert("Isi apa atuh? masa iya kosong (eror: 2)")
    }
}