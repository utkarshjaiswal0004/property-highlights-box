const express = require("express");
const router = express.Router();
const {
  createHighlight,
  getHighlights,
  updateHighlight,
  deleteHighlight,
  reorderHighlights,
} = require("../controllers/highlight-controller");

// Define the reorder route before the update route
router.put("/reorder", reorderHighlights);
router.post("/", createHighlight);
router.get("/", getHighlights);
router.put("/:id", updateHighlight);
router.delete("/:id", deleteHighlight);

module.exports = router;
