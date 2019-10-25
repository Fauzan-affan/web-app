# Checkbox V-model

## NTH

***instruksi:** Buka vscode, lalu intro

*Checkbox* juga bisa kita gunakan untuk pemilihan *value* yang melibatkan lebih dari satu pilihan. Dengan menggunakan v-model, kita juga bisa menjadikan *checkbox* menampilkan *live value*.

Yang berbeda dengan *tag html* sebelumnya, kalau tag-tag yang lain disimpan menggunakan tipe data *string* biasa di *property*. *Checkbox* disimpan menggunakan *array* di *property*.

Dan untuk menampilkan *checkbox* satu persatu, kita bisa menampilkannya dengan mengkolaborasikan *tag* *list* dan perulangan *for*.

***instruksi:**

1. Rubah *element* html untuk menampilkan dalam format *array*

    ```html
    <div id="app">
        <label>Berenang</label>
        <input type="checkbox" v-model="checkbox" value="berenang">
        <label>Menyelam</label>
        <input type="checkbox" v-model="checkbox" value="menyelam">
        <label>Memanah</label>
        <input type="checkbox" v-model="checkbox" value="memanah">
        <label>Berkuda</label>
        <input type="checkbox" v-model="checkbox" value="berkuda">
        <br>
        <h3>Format array: </h3>
        <h1>{{checkbox}}</h1>
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    checkbox: ""
    ```

3. Jalankan *live server*

4. Jelaskan perbaris

5. Tambahkan *element* html untuk menampilkan dalam format *list*

    ```html
    <br>
    <!-- tampilin dengan list -->
    <h3>Format list: </h3>
    <ul>
        <li v-for="pilihanku in checkbox">{{pilihanku}}</li>
    </ul>
    ```

6. Jalankan *live server*

7. Jelaskan perbaris
