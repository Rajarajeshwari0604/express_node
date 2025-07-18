const express = require('express')
const app = express()

app.get('/' , (req , res) => res.send('Hello world, This is My World!'))
app.listen(3000 , () => console.log('server ready'))

//http://localhost:3000