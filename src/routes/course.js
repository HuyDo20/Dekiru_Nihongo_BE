const express = require("express");
const { getAllCourse } = require("../controllers").course;
const router = express.Router();

router.get("/course", getAllCourse);

module.exports = router;
