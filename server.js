const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 1880

const app = express()
      app.use(express.json())
      app.listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})





app.get('/main', (_, res) => {
        res.send({msg: 'Welcome to the CTL main page'})
    })
    






    

/*
const path = require('path')
app.use(express.static('front/build'))
app.get('/*', (_, res) =>{
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})
*/
