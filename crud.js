// const express = require('express')
// const app = express();
// var bodyParser = require('body-parser')
// var mysql = require('mysql')

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodelearning'
// })

// connection.connect()
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())




// app.post('/hi',(req, res) => {
//     let data = {name: req.body.name, age: req.body.age};
//     let sql = "INSERT INTO node SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//       if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
//   });
   



// app.listen(8000, () => {
//     console.log('Example app listening on port 8000!')
//   });



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodelearning'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show
app.get('/api',(req, res) => {
    let sql = "SELECT * FROM node";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  //insert
app.post('/api/insert',(req, res) => {
  let data = {name: req.body.name, age: req.body.age};
  let sql = "INSERT INTO node SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update 
app.put('/api/:id',(req, res) => {
  let sql = "UPDATE node SET name='"+req.body.name+"', age='"+req.body.age+"' WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete 
app.delete('/api/:id',(req, res) => {
  let sql = "DELETE FROM node WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });