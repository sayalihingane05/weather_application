import { Sun, CloudRain, Cloud, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function WeatherCard({ weather }) {
  const getIcon = () => {
    const d = weather.description.toLowerCase();
    if (d.includes("rain")) return <CloudRain size={100} />;
    if (d.includes("snow")) return <Snowflake size={100} />;
    if (d.includes("cloud")) return <Cloud size={100} />;
    return <Sun size={100} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-6 w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl text-center"
    >
      <h2 className="text-4xl font-bold mb-2">{weather.city}</h2>
      <div className="flex justify-center mb-2 text-yellow-300">{getIcon()}</div>
      <p className="text-5xl font-bold">{weather.temperature}°C</p>
      <p className="mt-1 text-lg">{weather.description}</p>
      <p className="mt-2 opacity-80">
        Min: {weather.minTemp}°C | Max: {weather.maxTemp}°C
      </p>
    </motion.div>
  );
}
