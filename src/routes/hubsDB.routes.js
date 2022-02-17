const express = require("express");
const router = express.Router();
const {
  getRows,
  getRowById,
  createRow,
  updateRow,
  deleteRow,
} = require("../controllers/hubsDB.controller");
const { validate } = require("../middlewares/joiValidate");

router.get("/", getRows);
router.get("/:id", getRowById);
router.post("/", validate,createRow);
router.put("/:id", updateRow);
router.delete("/:id", deleteRow);

module.exports = router;
