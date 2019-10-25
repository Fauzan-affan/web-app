# Method Property

## NTH

***instruksi:** Buka vscode, lalu intro

*Watch property* digunakan ketika kita punya data yang otomatis harus berubah ketika data lain diubah. Kalau teman-teman sudah belajar tentang ES6, *watch property* ini bisa juga kita sebut dengan *asynchronous*. Yang artinya, kita bisa melakukan dua hal yang berbeda dalam waktu yang bersamaan.

Kita juga membutuhkan *v-model* untuk menerapkan *watch property* ini. Sederhananya *v-model* digunakan untuk menyimpan data ke properti yang kita punya.

***instruksi:**

1. Rubah *element* html

    ```html
    <div id="app">
        <h1>Konversi nilai</h1>
        kilometer: <input type="text" v-model="kilometer">
        meter: <input type="text" v-model="meter">
        <br><br>
        hints: <br>
        - km ke m x (dikali) 1000 <br>
        - m ke km / (dibagi) 1000
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    kilometer: '',
    meter: ''
    ```

3. Buat *watch property*

    ```js
    ,
    watch: {
        kilometer: function (val) {
            this.kilometer = val
            this.meter = val * 1000
        },
        meter: function (val) {
            this.meter = val
            this.kilometer = val / 1000
        }
    }
    ```

4. Jalankan *live server*

5. Jelaskan perbaris
