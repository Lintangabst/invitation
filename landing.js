// mengambil input dari user
var name = prompt("Masukkan nama Anda:");

// mengecek jika input tidak kosong
if (name != null && name != "") {
    // redirect ke halaman lain setelah mengisikan nama
    window.location.href = "next-page.html";
} else {
  // menampilkan peringatan jika input kosong
  alert("Anda harus mengisikan nama!");
}