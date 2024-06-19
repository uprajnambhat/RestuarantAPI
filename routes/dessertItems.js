const express = require("express");
const router = express.Router();
const getdessertDetails = require("../controller/dessertController.js");

router.get("/dessertMenu", getdessertDetails);

module.exports = router;
