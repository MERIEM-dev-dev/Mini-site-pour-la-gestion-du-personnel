// var express = require('express');  
// var app = express();  
// fs = require('fs');
// app.get('/mform', function(req){  
//     let myObject={name:req.query.name,email:req.query.email
//       ,address:req.query.address,phone:req.query.phone}
//     let data = fs.readFileSync('users.json');
//     let users = JSON.parse(data);
//     users.push(myObject);
//     fs.writeFile('users.json', JSON.stringify(users), function (err) {
//         if (err) return console.log(err);
//       });
    
// });  
// app.listen(8080)

// const axios = require('axios');
// const cheerio = require('cheerio');
// const fs = require('fs')

// // var request = https.get(url, function(response)


// importer les deux modules fs et cheerio
// let fs = require('fs');
// let cheerio = require('cheerio');

// // lire le fichier html Crud.html
// let html = fs.readFileSync('./Crud.html');

// // charger tout le fichier html dans la variable $
// let $ = cheerio.load(html);

// console.log($('#myTable').html());