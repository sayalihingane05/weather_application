package com.Weather_App.weather_backend.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Weather_App.weather_backend.model.WeatherResponse;
import com.Weather_App.weather_backend.service.WeatherService;


@RestController
public class WeatherController {


private final WeatherService weatherService;


public WeatherController(WeatherService weatherService) {
this.weatherService = weatherService;
}


@GetMapping("/api/weather")
public ResponseEntity<?> getWeather(@RequestParam String city) {
try {
WeatherResponse resp = weatherService.fetchWeatherForCity(city);
return ResponseEntity.ok(resp);
} catch (Exception e) {
return ResponseEntity.status(500).body("Error: " + e.getMessage());
}
}
}