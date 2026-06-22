import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const submitLead = async (payload) => {
  const response = await axios.post(
    `${API_URL}/api/leads`,
    payload
  );

  return response.data;
};