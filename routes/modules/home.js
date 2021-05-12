const express = require("express")
const router = express.Router()
const Record = require("../../models/record")

router.get("/", (req, res) => {
  const sort = "-_id"
  Record.find()
    .lean()
    .sort(sort)
    .then(records => res.render("index", { records }))
    .catch(error => console.error(error))
})

module.exports = router