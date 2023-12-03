chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getWeather') {
      getWeatherData().then(function (weatherData) {
        sendResponse(weatherData);
      });
      return true;
    }
  });
  
  async function getWeatherData() {
    const apiKey = 'Cwm6D2JMs8xBmUbcd3l1J5yUd8PevOKu'; // Замініть на свій ключ доступу
  
    try {
      // Отримання місця (Chernivtsi) за допомогою API AccuWeather
      const locationUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?q=Chernivtsi&apikey=${apiKey}`;
      const locationResponse = await fetch(locationUrl);
      const locationData = await locationResponse.json();
      const locationKey = locationData[0].Key;
  
      // Отримання погодової інформації за допомогою API AccuWeather
      const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
  
      // Повернення потрібних даних
      return {
        temperature: weatherData[0].Temperature.Metric.Value,
        condition: weatherData[0].WeatherText,
        wind: `${weatherData[0].Wind.Speed.Metric.Value} ${weatherData[0].Wind.Speed.Metric.Unit}`,
        humidity: `${weatherData[0].RelativeHumidity}%`
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  