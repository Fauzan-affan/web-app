# V-text dan v-html

## NTH

***instruksi:** Buka vscode

*Basic*-nya *declarative rendering, v-text, dan v-html* sama-sama digunakan untuk menampilkan *value* dari *property* yang kita miliki. Perbedaanya terletak pada *output* dari masing-masing sintaks. Biar lebih jelas, sekarang kita akan melihat perbedaan dari *declarative rendering, v-text, dan v-html* dengan contoh kode berikut.

***instruksi:**

1. Rubah bagian element HTML

    ```HTML
    <div id="app">
        <h1 v-text="message"></h1>
        <h1>{{ message }}</h1>
        <h1 v-html="message"></h1>
    </div>
    ```

2. Tambahkan *tag html* di dalam *value property*

    ```js
    message: '<i>Hello Vue!</i>'
    ```

3. Jalankan *live server*

4. Jelaskan perbaris
