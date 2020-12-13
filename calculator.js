const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

// Get
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/bmicalculator', function(req,res) {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

// Post
app.post('/', function(req, res) {
    const reqBody = req.body
    
    res.send(`Your sum is ${Number(reqBody.num1) + Number(reqBody.num2)}`)
})

app.post('/bmicalculator', function(req, res) {
    const reqBody = req.body

    const bmi = Math.max( (reqBody.weight * 703) / (reqBody.height ** 2), 2.8 ).toFixed(1);

    console.log(req.body)
    res.send(`Your BMI is ${bmi}`)

})

// Listener
app.listen(3000, function() {
    console.log(`Example app listening at http://localhost:3000`) 
})