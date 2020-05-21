const db = require("../data/dbconfig")


module.exports = {
  getAll,
  getOne,
  addOne,
  deleteOne
}

function getAll(){
  return db('bands')
}

function getOne(id){
  return db('bands').where('index','=', id)
}

function addOne(obj){
  return db('bands').insert({name:obj.name, genre:obj.genre, ranking:obj.ranking})
}

function deleteOne(){

}