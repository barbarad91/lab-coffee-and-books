const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

router.get("/", async (req, res, next) => {
  try {
    const placesList = await Place.find({ type: "coffee shop" }).select("name")
    res.render("display-list/coffee-shops", { placesList })
  } catch (err) {
    next(err)
  }
})
module.exports = router
