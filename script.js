let hargaBarang = [100, 200, 300];

// 2. Hitung total harga barang
let totalHarga = hargaBarang.reduce((total, harga) => total + harga, 0);
console.log("Total Harga:", totalHarga);

// 3. Tentukan jumlah barang yang dibeli
let jumlahBarang = hargaBarang.length;

// 4. Hitung diskon berdasarkan jumlah barang yang dibeli
let diskon = 0;
if (jumlahBarang > 10) {
  diskon = 0.15; // 15% diskon
} else if (jumlahBarang > 5) {
  diskon = 0.1; // 10% diskon
}else if (jumlahBarang > 0){
  diskon = 0.05; // 5% diskon
}
console.log("Diskon:", diskon * 100, "%");

// 5. Terapkan diskon ke total harga barang
let hargaSetelahDiskon = totalHarga * (1 - diskon);
console.log("Harga Setelah Diskon:", hargaSetelahDiskon); // Harusnya 540

// 6. Hitung pajak 5% dari harga setelah diskon
let pajak = hargaSetelahDiskon * 0.05;
console.log("Pajak:", pajak);

// 7. Tentukan biaya pengiriman
let biayaPengiriman = hargaSetelahDiskon + pajak > 500 ? 0 : 50;
console.log("Biaya Pengiriman:", biayaPengiriman);

// 8. Hitung total akhir yang harus dibayar
let totalAkhir = hargaSetelahDiskon + pajak + biayaPengiriman;
console.log("Total yang harus dibayar:", totalAkhir);
