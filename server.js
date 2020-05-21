const express = require('express')
const helmet = require('helmet')
const bandsRouter = require('./api/bands-router')

const server = express()
server.use(helmet())
server.use(express.json())

server.get('/', (req,res)=>{
  res.status(200).json("Server up and running")
})

server.use('/api/bands', bandsRouter)


module.exports = server