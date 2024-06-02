const express = require("express");
const { getAllStatus, login } = require("../controllers").status;
const router = express.Router();

router.get("/status", getAllStatus);
router.post("/status/login", login);

module.exports = router;
