const express = require('express')
const fs = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 1880

const app = express()
      app.use(express.json())
      app.listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})


      
app.get('/login:name', function (req, res)  {
    /*
    let ID_ToSearch = ''
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
        if (err) {console.log(`Error reading file from disk: ${err}`)}
        else {
            for (const iterator of JSON.parse(data)) {
                ID_ToSearch = req.params.name ; ID_ToSearch = ID_ToSearch.replace(':','')
                console.log("par ici")
                if (iterator.name  === ID_ToSearch){
                    console.log("ici maintenant" + iterator)
                    
                    return res.redirect("/Patients")

                }
                res.json({"id": "Not found"})
            }
        }
    })
    */
    console.log("Par là")
    res.redirect('/Patients')
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
