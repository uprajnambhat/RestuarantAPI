const express = require("express");
const router = express.Router();
const getBreakFastItems = require("../controller/breakfastController.js");

router.get("/breakFastItems", getBreakFastItems);

module.exports = router;
