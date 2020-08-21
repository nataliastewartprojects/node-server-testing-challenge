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

async function insert(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function remove(id) {
  return db("users").where("id", id).del();
}
