# Textbox V-model

## NTH

***instruksi:** Buka vscode, lalu intro

V-model adalah gabungan dari 2 hal. Pertama, v-model **mengambil *value*** dari *tag html*. Ke dua, v-model **meng-*update* hasil pemrosesan** ke dalam *tag html*. Sehingga, kita bisa melihat *live value* ketika kita menerapkan v-model di sebuah *tag html*.

Pada *lesson* sebelumnya kita pernah membahas tentang v-model yang digunakan untuk mengakses *value* di *textbox* yang diproses oleh *watch property*. Nah, sekarang kita akan membahas tentang bagaimana caranya menggunakan v-model di berbagai macam tag html yang lain, khususnya tag-tag yang sering kita gunakan untuk membuat *form*. Yang pertama, kita akan bahas bagaimana caranya menggunakan v-model di *textbox* terlebih dahulu.

***instruksi:**

1. Rubah *element* html

    ```html
    <div id="app">
        <input type="text" v-model="nama">
        <br>
        {{ nama }}
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    nama: ""
    ```

3. Jalankan *live server*

4. Jelaskan perbaris
