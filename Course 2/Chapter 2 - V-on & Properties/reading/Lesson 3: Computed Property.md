# Computed Property

## NTH

***instruksi:** Buka vscode, lalu intro

Untuk menghindari *logic* yang bertumpuk di dalam program yang menyebabkan kinerja aplikasi kita melambat, vue memisahkan seluruh logic yang kita punya ke dalam *computed property*.

Kita juga dapat mengakses *property-property* yang kita punya di dalam `data` dengan menambahkan sintaks `this` di bagian *computed property*-nya.

Perlu diperhatikan, ***logic-logic* ini akan otomatis dijalankan jika ada perubahan dari *property* yang terlibat dalam pemrosesan di *computed property*.**

***instruksi:**

1. Rubah bagian *element* HTML

    ```html
    Hasil penjumlahan {{angka1}} ditambah {{angka2}} adalah {{penjumlahan}}
    ```

2. Tambahkan *property* baru

    ```js
    angka1: 10,
    angka2: 40
    ```

3. Buat *computed property*

    ```js
    ,
    computed: {
        penjumlahan: function () {
            return this.angka1 + this.angka2
        }
    }
    ```

4. Jalankan *live server*

5. Jelaskan perbaris

6. Rubah *value property*-nya dan coba lihat perubahannya
