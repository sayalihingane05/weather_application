import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export async function fetchWeather(city) {
  const res = await axios.get(`${API_BASE}/api/weather`, {
    params: { city },
  });
  return res.data;
}
