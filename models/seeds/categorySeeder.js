
const category = require("../category")
const db = require("../../config/mongoose")
// succeed in connecting
const categories = [
  {
    item: "家居物業",
    icon: "fas fa-home"
  },
  {
    item: "交通出行",
    icon: "fas fa-shuttle-van"
  }, {
    item: "休閒娛樂",
    icon: "fas fa-grin-beam"
  },
  {
    item: "餐飲食品",
    icon: "fas fa-utensils"
  }, {
    item: "其他",
    icon: "fas fa-pen"
  }]

db.once("open", () => {
  const arr = []
  for (let i = 0; i < categories.length; i++) {
    const { item, icon } = categories[i]
    arr.push({ item, icon })
  }
  category.create(arr)
    .then(() => {
      console.log("done!!")
      return db.close()
    }).then(() => {
      console.log("db connection close ...")
    })
})