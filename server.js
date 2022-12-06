const express = require('express')
const fs = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 1880

const app = express()
      app.use(express.json())
      app.listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})


      
app.get('/login:name', (req, res) => {
    
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            for (const iterator of JSON.parse(data)) {
                console.log(iterator.name)
                console.log(req.params.name)
                if (iterator.name  === req.params.name){
                    res.json(iterator)
                    break
                }
            }
        }
    })
})

app.get('/CT', (req, res) => {
    fs.readFile('./data/trials.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(JSON.parse(data))
        }
    })
})


app.get('/Portfolio', (req, res) => {
    fs.readFile('./data/trialsPortfolio.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(data)
        }
    })
})

app.get('/Physicians', (req, res) => {
    fs.readFile('./data/physicians.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(data)
        }
    })
})

app.get('/Patients', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(data)
        }
    })
})
    

/*
const path = require('path')
app.use(express.static('front/build'))
app.get('/*', (_, res) =>{
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})
*/
