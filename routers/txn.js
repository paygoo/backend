const { Router } = require("express");
const { addTxn, getTxns } = require("../controllers/txn.js");

const router = Router();

router.post("/add-txn", addTxn);
router.get("/get-txn", getTxns);

module.exports = router;
