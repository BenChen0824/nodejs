const express = require('express')
const app = express()
// get the client
const db = require('./connect_db');


app.get('/', function (req, res) {
  res.send('Hello World12345')
})

        //這邊 /後面的意思是說 在主伺服器後面增加路徑 導向頁面
app.get('/cart', async (req, res) =>{
    const sql = 'SELECT * FROM `orderlist`';
    [rs]=await db.query(sql);
    res.json(rs);
    
    
})
app.get('/member', function (req, res) {
  res.send('Member')
})

console.log("server localhost:3000");
app.listen(3000)