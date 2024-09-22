const Highlight = require("../models/highlight");
const mongoose = require("mongoose");

const createHighlight = async (info, sequence) => {
  const newHighlight = new Highlight({ info, sequence });
  return await newHighlight.save();
};

const getHighlights = async () => {
  return await Highlight.find().sort({ sequence: 1 });
};

const updateHighlight = async (highlightId, info) => {
  if (!mongoose.isValidObjectId(highlightId)) {
    throw new Error("Invalid highlight ID");
  }
  return await Highlight.findByIdAndUpdate(
    highlightId,
    { info },
    { new: true }
  );
};

const reorderHighlights = async (highlightIds) => {
  await Promise.all(
    highlightIds.map(async (id) => {
      await Highlight.findByIdAndUpdate(id, { sequence: Math.random() });
    })
  );

  await Promise.all(
    highlightIds.map((id, index) =>
      Highlight.findByIdAndUpdate(id, { sequence: index + 1 })
    )
  );
};

const deleteHighlight = async (highlightId) => {
  return await Highlight.findByIdAndDelete(highlightId);
};

module.exports = {
  createHighlight,
  getHighlights,
  updateHighlight,
  reorderHighlights,
  deleteHighlight,
};
