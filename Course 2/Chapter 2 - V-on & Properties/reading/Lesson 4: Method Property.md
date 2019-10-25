# Method Property

## NTH

***instruksi:** Buka vscode, lalu intro

*Method property* berisi sekumpulan *method* yang bisa kita gunakan di dalam aplikasi. Fungsinya kurang lebih sama seperti *computed property*. Yang membedakan ke duanya adalah ***method property* hanya akan dijalankan ketika dipanggil saja, bukan ketika *property*-nya dirubah.**

***instruksi:**

1. Rubah *element* html

    ```html
    <div id="app">
        Hasil penjumlahan {{angka1}} ditambah {{angka2}} adalah {{hasil}}
        <br><br>
        <button v-on:click="penjumlahan">Tambah</button>
    </div>
    ```

2. Tambahkan *property* kosong baru untuk menampung hasil

    ```js
    hasil: ''
    ```

3. Buat *methods property*

    ```js
    ,
    methods: {
        penjumlahan: function () {
            return this.hasil = this.angka1 + this.angka2
        }
    }
    ```

4. Jalankan *live server*

5. Jelaskan perbaris

    - *methods* tidak akan dijalankan jika tidak dipanggil
    - perubahan *value* tidak otomatis menjalankan *methods property*
