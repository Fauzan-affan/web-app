// menggunakan module http
const http = require('http');

// membuat server baru menggunakan fungsi createServer yang terdapat di http
http.createServer((req,res) => {

    // menuliskan hello world di browser
    res.write("Hello world");

    // mengakhiri response
    res.end();
}).listen(8000); // mengatur port 8000

// memberitahukan server kita sedang berjalan
console.log("Server berjalan di port 8000");