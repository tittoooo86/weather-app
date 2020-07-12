const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'de2664bd0c21a2732a213959a414dcf8';

export default class API {
  static async fetchWeather(city: string) {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
}
