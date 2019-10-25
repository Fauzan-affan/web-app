# Radiobutton V-model

## NTH

***instruksi:** Buka vscode, lalu intro

*Radiobutton* bisa kita gunakan untuk jenis kelamin, jenis pekerjaan, dll yang melibatkan lebih dari satu pilihan. Dengan menggunakan v-model, kita juga bisa menjadikan *radiobutton* memiliki *live value*.

***instruksi:**

1. Rubah *element* html

    ```html
    <div id="app">
        <input type="radio" v-model="pilihanku" value="nomer satu"> pilihan 1
        <input type="radio" v-model="pilihanku" value="nomer dua"> pilihan 2
        <br>
        <h1>{{pilihanku}}</h1>
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    pilihanku: ""
    ```

3. Jalankan *live server*

4. Jelaskan perbaris
