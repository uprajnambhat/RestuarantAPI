const express = require("express");
const router = express.Router();
const getMainDishes = require("../controller/mainDishController.js");

router.get("/", getMainDishes);

module.exports = router;
