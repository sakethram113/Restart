const express = require("express");
const router = express.Router(); // Used to create modular, mountable route handlers
const authcontroller = require("../controllers/auth-controllers")

router.route("/").get(authcontroller.home);
router.route("/register").get(authcontroller.register);

module.exports = router;