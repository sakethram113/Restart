const express = require("express");
const router = express.Router(); // Used to create modular, mountable route handlers

router.route("/").get((req, res) => {
    res
    .status(200)
    .send("Routers page is here")
});
router.route("/").get((req, res) => {
    res
    .status(200)
    .send("Chipi chipi chapa chapa")
});

module.exports = router;