const fs = require('fs');
const express = require('express');
const app = express(); //create object
const port = 6500;

//define default route wiht express
app.get('/', (req, res) => {
    res.send('<h1> Welcome to express server</h1>');
})

//read file using express server
app.get('/getMovies', (req, res) => {
    fs.readFile('./data/db.json', (err, result) => {
        if(err){
            throw err;
        }else {
            console.log(JSON.parse(result))
        }
    })
})

// //read all data from file WITHOUT express into cmd
// fs.readFile('./data/db.json', (err, result) => {
//     if(err){
//         throw err;
//     }else {
//         console.log(JSON.parse(result))
//     }
// })

//write data in text file without express into cmd
fs.appendFile('./data/mytext.txt', 'My text read file\n', (err) => {
    if(err) throw err;
    else{
        console.log('Data written successfully')
    }
})

//create server to listen on port
app.listen(port, (err) => {
    console.log('server is running on port ' + port);
})