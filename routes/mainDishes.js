const express = require("express");
const router = express.Router();
const getMainDishes = require("../controller/mainDishController.JS");

router.get("/", getMainDishes);

module.exports = router;
