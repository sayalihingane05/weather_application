package com.Weather_App.weather_backend.model;

public class WeatherResponse {
private String city;
private double temperature;
private String description;
private String raw; // full JSON for debugging


// getters and setters
public String getCity() { return city; }
public void setCity(String city) { this.city = city; }
public double getTemperature() { return temperature; }
public void setTemperature(double temperature) { this.temperature = temperature; }
public String getDescription() { return description; }
public void setDescription(String description) { this.description = description; }
public String getRaw() { return raw; }
public void setRaw(String raw) { this.raw = raw; }
}