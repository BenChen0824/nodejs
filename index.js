const express = require('express')
const app = express()
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ben',
  password: "ben",
  database: 'farmer26'
});

app.get('/', function (req, res) {
  res.send('Hello World12345')
})

        //這邊 /後面的意思是說 在主伺服器後面增加路徑 導向頁面
app.get('/cart_list', function (req, res) {
    connection.query(
        'SELECT * FROM `orderlist`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          //console.log(fields); // fields contains extra meta data about results, if available
          res.json(results);
        }
    );
    
    
})
app.get('/member', function (req, res) {
  res.send('Member')
})

console.log("server localhost:3000");
app.listen(3000)