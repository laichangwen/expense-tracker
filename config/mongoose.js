const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/expense-tracker"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
// fail to connect
db.on("error", () => {
  console.log("mongodb error!!!")
})
// succeed in connecting
db.once("open", () => {
  console.log("mongodb connected!!!")
})

module.exports = db
