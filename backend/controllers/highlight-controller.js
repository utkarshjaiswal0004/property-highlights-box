const Highlight = require("../models/highlight");

// Create a new highlight
const createHighlight = async (req, res) => {
  try {
    const { info, sequence } = req.body;
    const newHighlight = new Highlight({ info, sequence });
    await newHighlight.save();
    res.status(201).json(newHighlight);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating highlight", error });
  }
};

// Get all highlights
const getHighlights = async (req, res) => {
  try {
    const highlights = await Highlight.find().sort({ sequence: 1 });
    res.json(highlights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching highlights", error });
  }
};

// Update a highlight
const updateHighlight = async (req, res) => {
  try {
    const { info, sequence } = req.body;
    console.log("Updating highlight:", req.params.id, "with data:", req.body);
    const updatedHighlight = await Highlight.findByIdAndUpdate(
      req.params.id,
      { info, sequence },
      { new: true }
    );

    if (!updatedHighlight) {
      return res.status(404).json({ message: "Highlight not found" });
    }

    res.json(updatedHighlight);
  } catch (error) {
    console.error("Error updating highlight:", error);
    res.status(400).json({ message: "Error updating highlight", error });
  }
};
const reorderHighlights = async (req, res) => {
  const { highlightIds } = req.body;

  // Check if highlightIds is a valid array
  if (!Array.isArray(highlightIds) || highlightIds.length === 0) {
    return res.status(400).json({ error: "Invalid highlight IDs" });
  }

  try {
    // Update each highlight's sequence
    await Promise.all(
      highlightIds.map((id, index) =>
        Highlight.findByIdAndUpdate(id, { sequence: index + 1 }, { new: true })
      )
    );
    res.status(200).json({ message: "Highlights reordered successfully" });
  } catch (error) {
    console.error("Error reordering highlights:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a highlight
const deleteHighlight = async (req, res) => {
  try {
    await Highlight.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Error deleting highlight", error });
  }
};

module.exports = {
  createHighlight,
  getHighlights,
  updateHighlight,
  reorderHighlights,
  deleteHighlight,
};
