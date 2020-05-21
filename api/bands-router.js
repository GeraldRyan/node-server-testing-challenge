const server = require("express").Router()
const db = require("../data/dbconfig")
const bandLib = require("./bands-model")

server.get('/', (req, res)=>{
  //display list of bands
  bandLib.getAll()
  .then(bands =>{
    res.status(200).json(bands)
  })
  .catch(err =>{
    res.status(500).json(err)
  })
})

server.get('/:id', (req, res)=>{
  //display list of bands

  bandLib.getOne(req.params.id)
  .then(bands =>{
    res.status(200).json(bands)
  })
  .catch(err =>{
    res.status(500).json(err)
  })


})  

server.post('/', (req, res)=>{
  //Add Band 
  res.status(200).json("Band added")
})


server.delete('/:id', (req, res)=>{
  //display list of bands
  res.status(200).json("Let's play music")
})  



module.exports = server
