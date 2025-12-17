import { Sun, CloudRain, Cloud, Snowflake } from "lucide-react";

export default function ForecastCard({ day }) {
  const getIcon = () => {
    const d = day.description.toLowerCase();
    if (d.includes("rain")) return <CloudRain size={40} />;
    if (d.includes("snow")) return <Snowflake size={40} />;
    if (d.includes("cloud")) return <Cloud size={40} />;
    return <Sun size={40} />;
  };

  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-3 shadow-md">
      <p className="font-semibold">{day.day}</p>
      {getIcon()}
      <p className="text-sm mt-1">{day.min}° / {day.max}°</p>
    </div>
  );
}
