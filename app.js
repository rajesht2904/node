const express = require('express')
const app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodelearning'
})

connection.connect()


app.get('/', (req, res) => {
connection.query('SELECT * from node', function (err, rows, fields)
{
    if (err) throw errconsole.log('the data are as follows', rows)
    res.send(rows);
})
});


app.get('/', (req, res) => {
  connection.query('SELECT * from node', function (err, rows, fields)
  {
      if (err) throw errconsole.log('the data are as follows', rows)
      res.send(rows);
  })
  });

connection.connect(function(err) {

  var sql = "INSERT INTO node (name, age) VALUES ('rajesh', '21'), ('rajesh1', '22')";
  connection.query(sql, function (err, fields) {
    if (err) throw err;
    console.log("2 record inserted");
  });
});
connection.connect(function(err) {
 
  var sql = "DELETE FROM node WHERE name = 'rajesh'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
connection.connect(function(err) {

  var sql = "UPDATE node SET name = 'rajesh2' WHERE name = 'rajesh1'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});