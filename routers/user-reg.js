const { Router } = require("express");
const regController = require("../controllers/user-reg.js");

const router = Router();

router.get("/regster", regPage);
router.post("/register", regController);

module.exports = router;
