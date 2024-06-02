const express = require("express");
const {
	registerAccount,
	getListUser,
	updateUserById,
	deleteUserById,
	getUserById,
	logOutAccount,
	loginAccount,
} = require("../controllers").account;
const { checkAuthAndRole } = require("../middleware/auth");
const { registerAccountSystem } = require("../controllers/account");
const router = express.Router();

router.post("/login", loginAccount);
router.post("/register", registerAccount);
router.post("/register-account-system", registerAccountSystem)
router.get("/accounts", checkAuthAndRole([1, 2]), getListUser);
router.put("/account/:id", checkAuthAndRole([1, 2, 3]), updateUserById);
router.get("/account/:id", checkAuthAndRole([1, 2, 3]), getUserById);
router.patch("/account/:id", checkAuthAndRole([1, 2]), deleteUserById);
router.get("/logout", logOutAccount);

module.exports = router;