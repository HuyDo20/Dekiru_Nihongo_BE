const express = require("express");
const { getAllQuizTypes, login } = require("../controllers").quiz_types;
const router = express.Router();

router.get("/quiz_types", getAllQuizTypes);

module.exports = router;
