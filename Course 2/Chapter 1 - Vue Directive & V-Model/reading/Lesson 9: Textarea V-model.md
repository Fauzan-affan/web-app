# Textarea V-model

## NTH

***instruksi:** Buka vscode, lalu intro

Biasanya kita menggunakan *textarea* untuk inputan alamat, komentar, dll. Dengan menggunakan v-model, kita bisa menjadikan *textarea* memiliki *live value*.

Kita juga akan tambahkan `style="white-space: pre-line;"` di bagian *tag* paragrafnya supaya bisa membuat pragraf baru setiap di-*enter*.

***instruksi:**

1. Rubah *element* html

    ```html
    <div id="app">
        <textarea cols="30" rows="10" v-model="paragraf"></textarea>
        <br>
        <p style="white-space: pre-line;">{{paragraf}}</p>
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    paragraf: ""
    ```

3. Jalankan *live server*

4. Jelaskan perbaris
