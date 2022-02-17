const express = require("express");
const router = express.Router();
const hubsdb = require("./hubsDB.routes");

router.use("/hubsdb", hubsdb);

module.exports = router;
