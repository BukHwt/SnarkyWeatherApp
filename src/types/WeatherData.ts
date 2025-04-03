export default interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temperature: number;
    weather_icons: string[];
    weather_descriptions: string[];
  };
}
