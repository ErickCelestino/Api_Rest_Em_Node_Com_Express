// config inicial
require("dotenv").config();
const express = require('express')
const mogoose = require('mongoose')
const app = express()


// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/',(req,res)=>{

    // mostrar req
    res.json({message:"Ola exprees"})
})

// entregar uma porta
const DB_USER = encodeURIComponent(process.env.USER_NAME)
const DB_PASSWORD = encodeURIComponent(process.env.USER_PASSWORD)

mogoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterteste.6m0r28o.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectamos ao MongoDB')
    app.listen(3030)
})
.catch((err) => console.log(err))

app.listen(3000)