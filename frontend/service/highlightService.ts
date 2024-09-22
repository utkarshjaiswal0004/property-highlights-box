import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/highlight`;

export const createHighlight = async (info: string, sequence: number) => {
  try {
    const response = await axios.post(API_URL, { info, sequence });
    return response.data;
  } catch (error) {
    console.error("Error creating highlight:", error);
    throw error;
  }
};

export const getHighlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    throw error;
  }
};

export const updateHighlight = async (id: string, info: string) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { info });
    return response.data;
  } catch (error) {
    console.error("Error updating highlight:", error);
    throw error;
  }
};

export const reorderHighlights = async (highlightIds: string[]) => {
  try {
    console.log("tried calling reorder");
    // Make sure to wrap the highlightIds array in an object
    await axios.put(`${API_URL}/reorder`, { highlightIds });
  } catch (error) {
    console.error("Error reordering highlights:", error);
    throw error;
  }
};

export const deleteHighlight = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting highlight:", error);
    throw error;
  }
};
