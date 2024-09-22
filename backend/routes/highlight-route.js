const express = require("express");
const router = express.Router();
const {
  createHighlight,
  getHighlights,
  updateHighlight,
  deleteHighlight,
  reorderHighlights,
} = require("../controllers/highlight-controller");

router.post("/", createHighlight);
router.get("/", getHighlights);
router.put("/:id", updateHighlight);
router.put("/reorder", reorderHighlights);
router.delete("/:id", deleteHighlight);

module.exports = router;
