const db = require("../data/dbconfig")


module.exports = {
  getAll,
  getOne
}

function getAll(){
  return db('bands')
}

function getOne(id){
  return db('bands').where('index','=', id)
}