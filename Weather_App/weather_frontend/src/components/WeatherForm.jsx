import { useState } from "react";
import { fetchWeather } from "../api";

export default function WeatherForm({ onResult, onError }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    try {
      const res = await fetchWeather(city);
      onResult(res);
    } catch (err) {
      onError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: "10px" }}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city Name"
        style={{
          flex: 1,
          padding: "0.8rem",
          borderRadius: "20px",
          border:"none",
          outline: "none",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          background: "#ffffff",
          color: "black",
          fontWeight: "bold",
          padding: "0.8rem 1.2rem",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          transition: "0.1s",
        }}
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}
