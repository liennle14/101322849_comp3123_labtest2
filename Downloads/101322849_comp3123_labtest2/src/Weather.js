import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'b16d8749e6dfa0f78476ffe55c3fe43e';
  var city = 'Toronto';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?q=Toronto&cnt=7&appid=b16d8749e6dfa0f78476ffe55c3fe43e&units=metric`,
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey, city]);

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className='data'>
        <form class="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Search<i class="fa fa-search"></i></button>
        </form>
    <h1>Today's Weather Forecast</h1>
    {weatherData && (
        <div>
            <h2>City: {weatherData.city.name}</h2>
            <h2>Temperature: {weatherData.list[0].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[0].weather[0].main}</h2>
            <h2>Description: {weatherData.list[0].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[0].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[0].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[0].weather[0].icon)}
                alt={weatherData.list[0].weather[0].description}
            />
            <div>
        {weatherData && (
          <div>
            <h1>Friday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[1].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[1].weather[0].main}</h2>
            <h2>Description: {weatherData.list[1].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[1].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[1].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[1].weather[0].icon)}
                alt={weatherData.list[1].weather[0].description}
            />
        
          <div>
            <h1>Saturday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[2].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[2].weather[0].main}</h2>
            <h2>Description: {weatherData.list[2].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[2].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[2].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[2].weather[0].icon)}
                alt={weatherData.list[2].weather[0].description}
            />
          </div>

          {/* Display other weather details for each day */}
          <div>
            <h1>Sunday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[3].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[3].weather[0].main}</h2>
            <h2>Description: {weatherData.list[3].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[3].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[3].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[3].weather[0].icon)}
                alt={weatherData.list[3].weather[0].description}
            />
        
          </div>
          <div>
            <h1>Monday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[4].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[4].weather[0].main}</h2>
            <h2>Description: {weatherData.list[4].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[4].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[4].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[4].weather[0].icon)}
                alt={weatherData.list[4].weather[0].description}
            />
        
          </div>
          <div>
            <h1>Tuesday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[5].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[5].weather[0].main}</h2>
            <h2>Description: {weatherData.list[5].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[5].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[5].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[5].weather[0].icon)}
                alt={weatherData.list[5].weather[0].description}
            />
        
          </div>

          <div>
            <h1>Wednesday Weather Forecast</h1>
            <h2>Temperature: {weatherData.list[6].main.temp_max}</h2>
            <h2>Weather: {weatherData.list[6].weather[0].main}</h2>
            <h2>Description: {weatherData.list[6].weather[0].description}</h2>
            <h2>Humidity: {weatherData.list[6].main.humidity}%</h2>
            <h2>Wind: {weatherData.list[6].wind.speed} km/h</h2>
            <img
                src={getWeatherIcon(weatherData.list[6].weather[0].icon)}
                alt={weatherData.list[6].weather[0].description}
            />
        
          </div>
          
          </div>
          
        )}
      </div>
        </div>
            
    )}
    </div>
    );
};

export default Weather;