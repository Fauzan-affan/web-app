# Buffer dan Streams

## Buffer

Untuk menangani *binary data*, node menyediakan yang namanya *buffer*. *Buffer* merepresentasikan penggunaan memori di mesin *javascript V8 chrome*. Banyak cara untuk membuat *buffer* ini, dan banyak juga cara untuk memanipulasi datanya.

> Data biner adalah jenis data yang direpresentasikan atau ditampilkan dalam sistem bilangan biner. Data biner adalah satu-satunya kategori data yang dapat langsung dipahami dan dieksekusi oleh komputer. Ini secara numerik diwakili oleh kombinasi angka nol dan satu.

Vanila javascript cukup mudah digunakan, tapi dia tidak dibuat untuk menangani *binary data*. Node menyediakan *buffer* yang menyediakan tempat untuk menyimpan *raw data* yang bentuknya mirip seperti *array* *integer*.

## Menyimpan & Membaca Data Buffer

Mari kita ibaratkan ***buffer* seperti stasiun bus**. Di suatu stasiun, bus tidak diperbolehkan berangkat sampai sejumlah penumpang memenuhi bus atau sampai jam keberangkatannya tiba. Sedangkan, kita tidak mengetahui kapan penumpang datang? Penumpang bisa saja di jam yang berbeda-beda dengan kecepatan kedatangan yang berbeda-beda pula. Jadi bisa disimpulkan, baik penumpang ataupun stasiun bus, dikontrol oleh kedatangan penumpang ke stasiun.

Dalam kasus yang lain, penumpang yang datang lebih dulu harus menunggu sampai bus memutuskan untuk berangkat. Sementara penumpang yang tiba ketika bus sudah penuh atau ketika bus sudah berangkat harus menunggu bus berikutnya.

Berdasarkan kasus di atas, selalu ada indikasi **harus menunggu**. Ini sama seperti *buffer* di node js. Node js tidak bisa mengontrol kecepatan data atau kapan datanya masuk *(speed of steam)*. Yang bisa diprediksi hanya kapan datanya bisa dikirimkan, untuk diproses. Nah, untuk memfasilitasi semua data yang masuk, node js menampungnya ke dalam *buffer* *(the waiting area)*, sampai waktu antrian data tersebut diproses.

Sebagai contoh *buffer*, kita bisa melihatnya ketika *streaming video online*. Jika koneksi internet cukup cepat, kualitas *streaming*-nya juga ikut cepat untuk mengisi *buffer* di komputer kita dan mengirimkan datanya untuk diproses ke sistem kita, jika *buffer* yang sebelumnya sudah diproses, isi *buffer* lagi, dan kirim untuk diproses lagi, begitu terus sampai proses *streaming*-nya selesai.

Tapi jika koneksi internetnya lemot, setelah memproses data yang pertama kali masuk ke *buffer*, *video player* akan menampilkan *loading icon* atau menampilkan tulisan *buffering*, yang artinya sedang mengumpulkan lebih banyak data ke *buffer*, supaya penuh. Setelah penuh dan diproses datanya, videonya muncul. Selama videonya *playing*, data yang masuk akan terus disimpan ke *buffer* dan menuggu untuk diproses oleh sistem.

Jika sudah selesai *playing* video data yang sebelumnya, dan *buffer* belum diisi lagi, tulisan *"buffering"* akan muncul kembali, menunggu untuk mendapatkan lebih banyak data untuk diproses oleh sistem.

Itulah *buffer!*
