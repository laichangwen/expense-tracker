const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const routes = require("./routes")
require("./config/mongoose")

const app = express()
const PORT = process.env.PORT || 3000
const helper = exphbs.create({
  defaultlayout: 'main',
  extname: ".hbs",
  helpers: {
    eq: function (v1, v2) { return (v1 === v2) }
  }
})
app.engine("hbs", helper.engine)
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})