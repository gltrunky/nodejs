const express = require("express");
const router = express.Router();

router.get("/api/users", (req, res) => {
  const users = require("../fixtures");
  res.status(200).json({ users });
});

router.get("/api/users/:id", (req, res) => {
  const user = require("../fixtures").users[req.params.id];
  res.status(200).json({ user });
});

module.exports = router;
