const router = require("express").Router();

const Users = require("./users-model");
// const restricted = require("../auth/authenticate-middleware");

//router.get("/", restricted, (req, res) => { //--- insert: restricted
router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      console.log("Get/user error:", error);
      res.status(500).json({ message: error.message });
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;
  Users.insert(newUser)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      console.log("POST/user error:", error);
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
