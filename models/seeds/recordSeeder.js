const expenses = require("../expenses")
const db = require("../../config/mongoose")

const data = [
  {
    name: "午餐", category: "餐飲食品", category_image: "fas fa-utensils", date: "2021/05/01", amount: 100,
  },
  {
    name: "計程車", category: "交通出行", category_image: "fas fa-shuttle-van", date: "2021/05/01", amount: 250,
  },
  {
    name: "KTV", category: "休閒娛樂", category_image: "fas fa-grin-beam", date: "2021/05/01", amount: 100,
  },
  {
    name: "水電瓦斯", category: "家居物業", category_image: "fas fa-home", date: "2021/05/01", amount: 999,
  },
  {
    name: "保險", category: "其他", category_image: "fas fa-pen", date: "2021/05/01", amount: 999,
  },
]


db.once("open", () => {
  const arr = []
  for (let i = 0; i < data.length; i++) {
    const { name, category, category_image, date, amount } = data[i]
    arr.push({ name, category, category_image, date, amount })
  }
  expenses.create(arr)
    .then(() => {
      console.log("done!!")
      return db.close()
    }).then(() => {
      console.log("db connection close ...")
    })
})