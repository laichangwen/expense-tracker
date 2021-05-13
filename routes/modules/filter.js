const express = require("express")
const router = express.Router()
const Record = require("../../models/record")

router.get("/", (req, res) => {
  const filter = req.query.filter
  return Record.find({ category: filter })
    .lean()
    .then((records) => {
      Record.aggregate([
        { $match: { category: filter } },
        {
          $group: {
            _id: null,
            amount: { $sum: "$amount" },
          }
        }
      ]).then((amount) => {
        totalamount = amount[0]
        if (totalamount)
          res.render("index", { records, totalamount, filter })
        else
          res.redirect("/")
      })
    })
})

router.get("/month", (req, res) => {
  const filter = req.query.filter
  return Record.find()
    .lean()
    .then(filtered => {
      let totalamount = { amount: 0 }
      records = filtered.filter(record => {
        if (Number(record.date.split("-")[1]) === Number(filter))
          totalamount.amount += record.amount
        return Number(record.date.split("-")[1]) === Number(filter)
      })
      if (records)
        res.render("index", { records, totalamount, filter })
      else
        res.redirect("/")
    })
})

module.exports = router