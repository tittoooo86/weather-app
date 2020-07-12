declare module 'redux-persist/lib/*';

export interface BaseAction {
  type: string;
  payload: any;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

export interface WeatherData {
  id?: string;
  weather: Weather[];
  main: Main;
  wind: Wind;
  visibility: number;
}
