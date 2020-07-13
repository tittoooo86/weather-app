import Config from 'react-native-config';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export default class API {
  static async fetchWeather(city: string) {
    const url = `${BASE_URL}/weather?q=${city}&appid=${Config.OPEN_WEATHER_API_KEY}&units=metric`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
}
