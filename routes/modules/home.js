const express = require("express")
const router = express.Router()
const Record = require("../../models/record")


router.get("/", (req, res) => {
  Record.find()
    .lean()
    .sort("-date")
    .then((records) => {
      Record.aggregate([
        {
          $group: {
            _id: null,
            amount: { $sum: "$amount" },
          }
        }
      ]).then((amount) => {
        totalamount = amount[0]
        res.render("index", { records, totalamount })
      })
    })
})

module.exports = router