const express = require('express')
const users = require('./data/users.json')
const fs = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 1880

const app = express()
      app.use(express.json())
      app.listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})

app.get('/login:name', function (req, res)  {
    let dataToReturn = []
    for (const iterator of users) {
        ID_ToSearch = req.params.name ; ID_ToSearch = ID_ToSearch.replace(':','')
        if (iterator.name  === ID_ToSearch){
            console.log("Found " + iterator.name + " in users.json")
            dataToReturn = iterator
            //res.json(iterator)
            break
        }
    }
    const isEmpty = Object.keys(dataToReturn).length === 0 
    console.log(isEmpty)
    if (isEmpty) {
        res.send({"userID": "Not found"})
    } else {
        res.json(dataToReturn)
    }
    

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
            res.json(JSON.parse(data))
        }
    })
})

//require du fichier
app.get('/Physicians', (req, res) => {
    fs.readFile('./data/physicians.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(JSON.parse(data))
        }
    })
})

app.get('/Patients', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            res.json(JSON.parse(data))
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
