const baseUrl: string = "https://api.openweathermap.org/data/2.5";
const apiKey: string | undefined = process.env.OPENWEATHERMAP_API_KEY;

export const getCurrentWeather = async (
  location: string,
  units: string = "metric"
) => {
  const result = await fetch(
    `${baseUrl}/weather?q=${location}&units=${units}&appId=${apiKey}`
  ).then((response) => response.json());

  return result;
};

export const getWeatherForecast = async (
  location: string,
  units: string = "metric"
) => {
  const result = await fetch(
    `${baseUrl}/forecast?q=${location}&units=${units}&appId=${apiKey}`
  ).then((response) => response.json());

  return result;
};
