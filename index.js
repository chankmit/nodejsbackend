const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! MY name is Wichan')
})

app.get('/info', (req, res) => {
    res.json({
        status: 'success',
        message: 'request completed',
        appname: 'backend api',
        appversion: '1.0.0',
        author: 'Wichan Thumthong'
    })
})

app.get('/dev', (req, res)=>{
    res.json({
        name:'Wichan',
        surname:'Thumthong',
        email:'chankmit@gmail.com',
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})