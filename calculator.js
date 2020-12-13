const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
    const reqBody = req.body
    
    res.send(`Your result is ${Number(reqBody.num1) + Number(reqBody.num2)}`)
})

app.listen(3000, function() {
    console.log(`Example app listening at http://localhost:3000`) 
})