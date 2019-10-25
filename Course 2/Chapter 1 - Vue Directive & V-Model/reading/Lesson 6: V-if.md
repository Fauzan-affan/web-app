# V-if

## NTH

***instruksi:** Buka vscode, lalu intro

Kalau temen-temen udah pernah bermain dengan penanganan kondisi di bahasa pemrograman, harusnya temen-temen sudah kenal dengan yang namanya *if, else if, atau else*. Dengan menggunakan vue, kita bisa menuliskan kondisional ini langsung di dalam tag html, atau yang biasa disebut dengan gaya penulisan *inline*.

***instruksi:**

1. Rubah bagian element HTML

    ```html
    <div id="app">
        <h1 v-if="status == 'online'" v-html="message"></h1>
        <h1 v-else="status != 'online'" v-html="sayur"></h1>
    </div>
    ```

2. Tambahkan dua buah *property* baru

    ```js
    sayur: 'Brokoli',
    status: 'online'
    ```

3. Jalankan *live server*

4. Jelaskan perbaris
