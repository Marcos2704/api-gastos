const express = require("express");
const CategoryController = require("../controller/category");

const router = express.Router();


router.post("/", CategoryController.create);
router.get("/", CategoryController.findAll);
router.get("/search", CategoryController.findType);


module.exports = router;