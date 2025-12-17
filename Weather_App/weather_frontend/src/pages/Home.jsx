import { useState } from "react";
import WeatherForm from "../components/WeatherForm";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div 
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(100deg, #8dd5fa, #2980b9)",
        color: "black",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem"}}>
        🌤 Weather App
      </h1>

      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "2rem",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: "450px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
      >
        <WeatherForm
          onResult={(res) => {
            setWeather(res);
            setError(null);
          }}
          onError={(e) => {
            setError(e);
            setWeather(null);
          }}
        />

        {error && (
          <div style={{ marginTop: "1rem", color: "red", fontWeight: "bold" }}>
            {error}
          </div>
        )}

        {weather && (
          <div style={{ marginTop: "1.5rem", textAlign: "center"}}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color:"Red"}}>
              {weather.city}
            </h2>
            <p style={{ fontSize: "2rem" }}>
              🌡 Temperature: <b>{weather.temperature}°C</b>
            </p>
            <p style={{ fontSize: "2rem" }}>{weather.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
