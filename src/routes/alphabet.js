const express = require("express");
const { getAllAlphabet, login } = require("../controllers").alphabet;
const router = express.Router();

router.get("/alphabet", getAllAlphabet);

module.exports = router;
