const server = require("express").Router()
const db = require("../data/dbconfig")
const bandLib = require("./bands-model")

server.get('/', (req, res) =>
{
  //display list of bands
  bandLib.getAll()
    .then(bands =>
    {
      res.status(200).json(bands)
    })
    .catch(err =>
    {
      res.status(500).json(err)
    })
})

server.get('/:id', (req, res) =>
{
  //display list of bands

  bandLib.getOne(req.params.id)
    .then(bands =>
    {
      res.status(200).json(bands)
    })
    .catch(err =>
    {
      res.status(500).json(err)
    })


})

server.post('/', (req, res) =>
{
  //Add Band 

  bandLib.addOne(req.body)
    .then(neue =>
    {
      res.status(200).json(neue)
    })
    .catch(e =>
    {
      res.status(500).json(e)
    })

})


server.delete('/:id', (req, res) =>
{
  bandLib.deleteOne(req.params.id)
    .then(g =>
    {
      res.status(200).json("It's gone")
    })
    .catch(e =>
    {
      res.status(500).json(e)
    })
})



module.exports = server
