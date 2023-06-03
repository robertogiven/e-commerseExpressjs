const express = require("express");
const router = express.Router();

const { getDataProduct } = require("../Controllers/ProductController");

router.get("/dataproduct", getDataProduct);

module.exports = router;
