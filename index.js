const express = require('express')
const app = express()
// get the client
const db = require('./connect_db');


var cors = require('cors');

app.use(express.urlencoded())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World12345')
})

        //這邊 /後面的意思是說 在主伺服器後面增加路徑 導向頁面
app.get('/cart', async (req, res) =>{
    const sql = 'SELECT * FROM `orderlist` ';
    const [rs]=await db.query(sql);
    res.json({'db':rs,"session":true});
})

app.post('/cart', async (req, res) => {
    console.log(req.body);
    const sql = 'SELECT * FROM `orderlist` WHERE customer_id = ?';
    const [rs]=await db.query(sql,[req.body.sid]);
    res.json({'db':rs,"session":true});
    
})
app.post('/login', async (req, res) => {
    
    const {email,password}=req.body;
    const sql = 'SELECT * FROM `customer_data` WHERE email = ? AND mobile = ?';

    const [rs]=await db.query(sql,[email,password]);
    res.json({'db':rs,"session":true});
    
})
app.get('/member', function (req, res) {
  res.send('Member')
})

console.log("server localhost:3000");
app.listen(3000)