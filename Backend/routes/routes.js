const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/controllers");

router.post("/signup", signUpController);

module.exports = router;
