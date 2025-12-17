package com.Weather_App.weather_backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.Weather_App.weather_backend.model.WeatherResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

    public WeatherResponse fetchWeatherForCity(String city) throws Exception {

        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException("Weather API key is missing");
        }

        String url = UriComponentsBuilder.fromHttpUrl("https://api.openweathermap.org/data/2.5/weather")
                .queryParam("q", city)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")
                .toUriString();

        String json = restTemplate.getForObject(url, String.class);
        JsonNode root = mapper.readTree(json);

        WeatherResponse resp = new WeatherResponse();
        resp.setCity(root.path("name").asText());
        resp.setTemperature(root.path("main").path("temp").asDouble());
        resp.setDescription(root.path("weather").get(0).path("description").asText());
        resp.setRaw(json);

        return resp;
    }
}
