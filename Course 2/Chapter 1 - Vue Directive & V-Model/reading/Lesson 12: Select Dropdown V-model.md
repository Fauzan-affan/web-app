# Select Dropdown V-model

## NTH

***instruksi:** Buka vscode, lalu intro

*Select dropdown* juga bisa kita gunakan untuk pemilihan *value* yang melibatkan satu atau lebih pilihan. Dengan menggunakan v-model, kita juga bisa menjadikan *select dropdown* menampilkan *live value*.

*Select dropdown* sama dengan *checkbox*, kalau *checkbox* disimpan menggunakan *array* di *property*, *select dropdown* bisa menggunakan *string* ataupun *array*.

Perbedaanya, pada saat disimpan menggunakan *string*, *select dropdown* hanya bisa menampilkan satu *value* saja. Sedangkan jika disimpan dengan *array*, *select dropdown* bisa menampilkan lebih dari satu *value*. Untuk memilih lebih dari satu *option*, kita tinggal tambahkan *multiple* di bagian *tag select*-nya.

Dan untuk menampilkan *select dropdown* satu persatu, kita bisa menampilkannya dengan mengkolaborasikan *tag* *list* dan perulangan *for*.

***instruksi:**

1. Rubah *element* html untuk menampilkan dalam format *single value*

    ```html
    <div id="app">
        <select v-model="kerjaanAnakku">
            <option value="" disabled>Kerjaan Anakku</option>
            <option value="pilot">pilot</option>
            <option value="dokter">dokter</option>
            <option value="pengusaha">pengusaha</option>
        </select>
        <br>
        <h1>{{kerjaanAnakku}}</h1>
    </div>
    ```

2. Tambahkan *property* kosong baru

    ```js
    kerjaanAnakku: ""
    ```

3. Jalankan *live server*

4. Jelaskan perbaris

5. Tambahkan *element* html untuk menampilkan dalam format *multiple value*

    ```html
    <br>
    <!-- tampilin dengan list -->
    <h3>Format list: </h3>
    <ul>
        <li v-for="pilihanku in checkbox">{{pilihanku}}</li>
    </ul>
    ```

6. Jangan lupa tambahkan *multiple* di bagian *tag* *select*

    ```html
    <select v-model="kerjaanAnakku" multiple>
    ```

7. Rubah *property* menjadi *array*

    ```js
    kerjaanAnakku: []
    ```

8. Jalankan *live server*

9. Jelaskan perbaris
