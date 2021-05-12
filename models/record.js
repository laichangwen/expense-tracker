const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ["家居物業", "交通出行", "休閒娛樂", "餐飲食品", "其他"], message: '{VALUE} is not supported'
    },
    required: true,
  },
  icon: {
    type: String,
    enum: { values: ["fas fa-home", "fas fa-shuttle-van", "fas fa-grin-beam", "fas fa-utensils", "fas fa-pen"], message: '{VALUE} is not supported' },
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  totalAmount: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model("Expense", expenseSchema)