const highlightService = require("../services/highlightService");

const createHighlight = async (req, res) => {
  try {
    const { info, sequence } = req.body;
    const newHighlight = await highlightService.createHighlight(info, sequence);
    res.status(201).json(newHighlight);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating highlight", error });
  }
};

const getHighlights = async (req, res) => {
  try {
    const highlights = await highlightService.getHighlights();
    res.json(highlights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching highlights", error });
  }
};

const updateHighlight = async (req, res) => {
  try {
    const { info } = req.body;
    const highlightId = req.params.id;
    const updatedHighlight = await highlightService.updateHighlight(
      highlightId,
      info
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

  if (!Array.isArray(highlightIds) || highlightIds.length === 0) {
    return res.status(400).json({ error: "Invalid highlight IDs" });
  }

  try {
    await highlightService.reorderHighlights(highlightIds);
    res.status(200).json({ message: "Highlights reordered successfully" });
  } catch (error) {
    console.error("Error reordering highlights:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteHighlight = async (req, res) => {
  try {
    await highlightService.deleteHighlight(req.params.id);
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
