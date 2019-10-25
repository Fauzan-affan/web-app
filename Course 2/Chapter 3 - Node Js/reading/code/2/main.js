// include module penambahan.js
const modul = require('./penambahan');

// tampung ke dalam hasil
let hasil = modul.tambah(10,5); // tambah adalah nama fungsi yang terdapat di module penambahan.js

// tampilkan
console.log(hasil);