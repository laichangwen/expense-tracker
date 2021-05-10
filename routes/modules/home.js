const express = require("express")
const router = express.Router()
const Todo = require("../../models/todo")

router.get("/", (req, res) => {
  const sort = "-_id"
  Todo.find()
    .lean()
    .sort(sort)
    .then(todos => res.render("index", { todos }))
    .catch(error => console.error(error))
})

module.exports = router