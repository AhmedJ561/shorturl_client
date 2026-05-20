import axios from "axios";

const API_URL = process.env.API_URL;

export async function createShortUrl(url) {
  try {
    const response = await axios.post(`${API_URL}/url`, { url });
    return response.data;
  } catch (error) {
    console.error("Error creating short URL:", error);
    return null;
  }
}

export async function getShortUrl(shortId) {
  return `${API_URL}/${shortId}`;
}
