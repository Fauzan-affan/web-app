# Vue Bekerja

## NTH / animation

### Alur Vuejs

***instruksi:** Buka VSCode

Sekarang saya akan menjelaskan sedikit alur dari vue.

***instruksi:**

- Jelaskan alur dr mulai membuat file html, import CDN, sampai mengetikan sintaks dasar vuejs di bagian script di dalam body.

### Masukin CDN

Pertama, kita buat file html baru dulu.

Ke dua, kita bisa membuat standar html dan rubah titlenya seperti berikut.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Berkenalan dengan Vue</title>
    </head>
    <body>

    </body>
</html>
```

Vue bisa kita jalankan hanya dengan menyisipkan CDN ke dalam HTML yang kita punya.

***instruksi:** Buka website vue

Sekarang saya sudah ada di *website* [vuejs](https://vuejs.org/). Kita klik bagian *get started*.

***instruksi:**

1. Scroll ke bawah sampai nemu:

    ```js
    <!-- production version, optimized for size and speed -->

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    ```

2. Copy CDN dan sisipkan di bagian body

### Membuat Script Vue

***instruksi:**

1. scroll ke bagian *declarative rendering* di *website* vue, atau buat *element* html baru dengan class/id bebas sperti ini:

    ```html
    <div id="app">

    </div>
    ```

2. buat script di bawah import vue dan isikan:

    ```js
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })
    </script>
    ```

3. panggil `message` di dalam tag `div` yang sudah ditandai dengan `id="app"`

4. coba dengan *live server* dan jelaskan tentang *derective rendering*

5. coba rubah *value* dari *property*-nya
