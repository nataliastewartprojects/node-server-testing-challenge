const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  find,
  findById,
  remove,
};

function find() {
  return db("user").select("id", "username").orderBy("id");
}

function insert(user) {
  return db("user")
    .insert(user)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("user").where({ id }).first();
}

function remove(id) {
  return db("user").where("id", id).del();
}
