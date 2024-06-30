const express = require("express");
const database = require("./utils/db");
const userRouter = require("./routers/user-reg");
const txnRouter = require("./routers/txn");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
database.connect();

app.use(userRouter);
app.use("/transaction", txnRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
