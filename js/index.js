
// fungsi hitung bmi 
function hitungBMI(){
    
    // membuat variabel dan menampilkan pilihan gender dari radio button 
    var pilihanGender = document.getElementsByName("jenis-kelamin");
    let opsiPilihan;

    // mencari nilai yang dipilih menggunakan loop
    for (let i = 0; i < pilihanGender.length; i++){
        if (pilihanGender[i].checked){
            opsiPilihan = pilihanGender[i].value;
            break;
        }
    }
    // membuat variabel dan menampilkan usia
    var usia = document.getElementById("usia").value;

    // membuat variabel berat dan tinggi serta mengambil nilai dari id
    var berat = document.getElementById("berat-badan").value;
    var tinggiCM = document.getElementById("tinggi-badan").value;
    
    // konversi setelan tinggi dari m ke cm
    var tinggiM = tinggiCM/100;

    // rumus bmi 
    var bmi = berat/(tinggiM*tinggiM);

    // membuat hasil hitung satu angka di belakang koma
    bmi = bmi.toFixed(1);

    // membuat variabel deskripsi dan keterangan untuk menyimpan text sesuai hasil
    var deskripsi = "";
    var keterangan = "";

    // pembagian kategori dari hasil bmi 
    if(bmi < 18.5){
        deskripsi = "Kekurangan berat badan";
        keterangan = "<br>Anda memiliki berat badan kurang dari normal dan dapat mengalami masalah kesehatan seperti lemahnya sistem imun, anemia, dan masalah tulang.<br><br> Solusinya adalah meningkatkan asupan kalori dan nutrisi melalui makanan yang sehat dan berolahraga secara teratur.";
    } else if(bmi>=18.5 && bmi <= 24.9){
        deskripsi = "Berat badan normal";
        keterangan = "<br>Selamat! anda memiliki berat badan yang normal, berat badan normal akan memiliki resiko yang lebih rendah terhadap penyakit jantung, stroke, dan penyakit kronis lain.<br><br>Pertahankanlah berat badan dan kesehatan anda.";
    } else if(bmi >=25.0 && bmi <= 29.9){
        deskripsi = "Berat badan berlebih";
        keterangan = "<br>Anda memiliki berat badan berlebih dan memiliki resiko lebih tinggi untuk terkena penyakit seperti diabetes, tekanan darah tinggi, penyakit jantung, stroke, dan kanker tertentu.<br><br>Solusinya adalah dengan cara mengatur pola makan, mengurangi asupan kalori secara bertahap, dan berolahraga secara teratur";
    }else if(bmi >= 30){
        deskripsi = "Obesitas";
        keterangan = "<br>Anda termasuk ke kategori obesitas, anda memiliki resiko tinggi terhadap penyakit kesehatan yang serius seperti diabetes.<br><br>Solusinya adalah anda sangat disarankan mengatur pola makan dengan cara mengurangi asupan kalori secara teratur dan berolahraga yang ringan secara teratur.";
    } else{
        return 0;
    }

    // mencetak hasil bmi 
    document.getElementById("hasil-bmi").innerHTML = "<strong>BMI </strong>" + opsiPilihan + " " + usia + " tahun";
    document.getElementById("bilangan-bmi").innerHTML = bmi + "<hr>";
    document.getElementById("keterangan-bmi").innerHTML = deskripsi;
    document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : <br>" + keterangan;

    // scroll ke hasil setelah menekan submit
    window.location.href = '#scroll-hasil-bmi';
}

// reset hasil input dan perhitungan
function resetData(){
    document.getElementById("hasil-bmi").innerHTML = "Silahkan masukkan data terlebih dahulu!";
    document.getElementById("bilangan-bmi").innerHTML = "";
    document.getElementById("keterangan-bmi").innerHTML = "";
    document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : -";
}

// membuat button terlihat ketika di scroll
window.onscroll = function(){scroll()}; 
function scroll(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20){
        document.getElementById("top-page").style.display = "block";
    } else{
        document.getElementById("top-page").style.display = "none";
    }
}

// membuat fungsi untuk kembali ke tampilan atas ketika button diklik 
function scrollAtas(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}