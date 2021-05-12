const express = require("express")
const router = express.Router()
const Record = require("../../models/record")

// create new todo
router.get("/create", (req, res) => {
  return res.render("create")
})

router.post("/", (req, res) => {
  const { name, category, date, amount } = req.body
  let [type, icon] = category.split("/")
  return Record.create({ name, category: type, icon, date, amount })
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

// edit todo of a specific id
router.get("/:id/edit", (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render("edit", { record }))
    .catch(error => console.log(error))
})

router.put("/:id", (req, res) => {
  const { name, category, date, amount } = req.body
  let type, icon
  if (category.split("/")) {
    [type, icon] = category.split("/")
  }
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record.name = name
      record.category = type || category
      record.icon = icon || record.icon
      record.date = date
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

// delete todo of a specific id
router.delete("/:id", (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record.remove()
    })
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})


module.exports = router