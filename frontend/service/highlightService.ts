import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/highlight`;

// Create a new highlight
export const createHighlight = async (info: string, sequence: number) => {
  try {
    const response = await axios.post(API_URL, { info, sequence });
    return response.data;
  } catch (error) {
    console.error("Error creating highlight:", error);
    throw error;
  }
};

// Get all highlights
export const getHighlights = async () => {
  try {
      const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    throw error;
  }
};

// Update a highlight
export const updateHighlight = async (id: string, info: string, sequence: number) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { info, sequence });
      return response.data; // Ensure the response has the updated highlight
    } catch (error) {
      console.error("Error updating highlight:", error);
      throw error;
    }
  };
  


// Reorder highlights
export const reorderHighlights = async (highlightIds: string[]) => {
  try {
    // Make sure to wrap the highlightIds array in an object
    await axios.put(`${API_URL}/reorder`, { highlightIds: highlightIds });
  } catch (error) {
    console.error("Error reordering highlights:", error);
    throw error;
  }
};
// Delete a highlight
export const deleteHighlight = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting highlight:", error);
    throw error;
  }
};

