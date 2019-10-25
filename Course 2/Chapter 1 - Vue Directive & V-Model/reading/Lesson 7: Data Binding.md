# Data Binding dengan Vue.js

Sebelumnya, kita sudah belajar mengenai apa itu vue dan bagaimana penggunaan v-model. Buat teman-teman yang belum tau, v-model adalah *two ways data binding* yang disedikan oleh vue. Nah, kali ini kita akan membahas lebih dalam mengenai salah satu fitur di dalam vue yaitu *data binding*.

*Data binding* atau *reactive data binding system*, secara singkat adalah fitur yang dapat menyimpan data seperti *variabel, array, value*, dll ke dalam *property* yang kita punya dan tersinkronisasikan dengan DOM html secara otomatis. Kalau teman-teman perhatikan pada video-video sebelumnya, si *data binding* inilah yang menyebabkan seolah-olah kita bisa meng-*update* data kita secara *live*.

Contoh, semisal kita mengubah nilai pada parameter `message` menjadi `‘Hello’` maka data akan diperbaharui pada tag html sehingga menyimpan *property* dengan *value* yang sudah kita ubah tadi yaitu `‘Hello’`.

## Mengenal Perintah V-bind untuk Data Binding pada Vue.js

Sebelumnya, apa itu v-bind? v-bind adalah **salah satu perintah di dalam vue yang digunakan untuk menghubungkan data *(property)* ke dalam HTML.** Secara sederhana dapat dijelaskan seperti ini, jika kita ingin menghubungkan *code* javascript kita ke dalam sebuah tag HTML, caranya adalah dengan menggunakan v-bind di tag HTML yang mau kita hubungkan. *Data binding* membuat kontrol-kontrol dalam tag HTML terkoneski (terkait) dengan sumber-sumber data *(property)*.

V-bind dapat di tulis dengan `v-bind:` atau dapat kita singkat hanya dengan `:` saja.
Contohnya seperti kode di bawah ini:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="app">
            <!-- Menghubungkan tag a dengan property url -->
            <a :href="url">{{url}}</a>
        </div>

        <!-- import cdn vue -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

        <script>
            new Vue({
                el : '#app',
                data : {
                    // property
                    url:'https://www.google.com'
                }
            })
        </script>
    </body>
</html>
```

Hasilnya dapat dilihat seperti di bawah ini:

![v-bind](img/7/v-bind.png)

Dari kode di atas, dapat kita lihat jika kita menambahkan *value* pada tag `<a></a>`, menggunakan *property* `url` yang terdapat di dalam *script*. Data url yang dimaksud adalah ['https://www.google.com'](https://www.google.com).

> Kode di atas menggunakan `:href = “url”`, namun ingat kita juga bisa mengubahnya menjadi `v-bind:href = “url”`.

## Mengenal Perintah V-model untuk Two-Ways Data Binding pada Vue.js

Bagaimana konsep *two-ways data binding*?

Singkatnya, **setiap perubahan** yang kita lakukan pada *property* di *script* akan berpengaruh terhadap tampilan yang terdapat di dalam kode HTML kita, dan sebaliknya perubahan yang terjadi pada tampilan akan berpengaruh juga terhadap *property* yang terdapat di dalam *script* nya.
Vue.js merupakan *front-end javascript framework* yang menerapkan konsep ini.

Perintah yang digunakan untuk melakukan proses *two way-data binding* di dalam vue adalah v-model. V-model akan ditempelkan di dalam tag HTML yang kita gunakan untuk melakukan perubahan terhadap *property* javascript maupun tampilan HTML kita.

> Perintah untuk *data binding* adalah `v-bind:`, sedangkan perintah untuk *two ways data binding* adalah `v-model`.

Sebagai contoh, kita akan membuat sebuah inputan di mana ketika inputan ini diisikan, inputan akan otomatis menampilkan tulisan yang kita isikan di dalam inputan tadi di bagian bawahnya dan *value* *property* di *script*-nya pun ikut berubah. Contohnya seperti kode di bawah ini:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
            <div id="app">
                <form action="">
                    <div class="col-sm-6">
                        <input  v-model="message" type="text" class="form-control">
                    </div>
                    {{message}}
                </form>
            </div>
        </div>

        <!-- CDN dari vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

        <!-- kode Javascript -->
        <script>
                let vm = new Vue({
                    el : '#app',
                    data : {
                        message:''
                    }
                })
        </script>
    </body>
</html>
```

Hasilnya dapat dilihat seperti di bawah ini:

![v-model](img/7/v-model.png)

Sumber:

1. [https://medium.com/@tedoharischandra29/databinding-dalam-vue-js-71b3c82ba0f4](https://medium.com/@tedoharischandra29/databinding-dalam-vue-js-71b3c82ba0f4)
2. [https://medium.com/@tedoharischandra29/two-way-data-binding-dengan-vue-js-2a3428e41a1d](https://medium.com/@tedoharischandra29/two-way-data-binding-dengan-vue-js-2a3428e41a1d)
