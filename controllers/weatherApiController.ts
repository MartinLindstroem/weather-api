const baseUrl: string = "https://api.openweathermap.org/data/2.5";
const apiKey: string | undefined = process.env.OPENWEATHERMAP_API_KEY;

export const getCurrentWeather = async (
  lat: string,
  lon: string,
  units: string = "metric"
) => {
  const result = await fetch(
    `${baseUrl}/weather?lon=${lon}&lat=${lat}&units=${units}&appId=${apiKey}`
  ).then((response) => response.json());

  return result;
};

export const getWeatherForecast = async (
  lat: string,
  lon: string,
  units: string = "metric"
) => {
  const result = await fetch(
    `${baseUrl}/forecast?lon=${lon}&lat=${lat}&units=${units}&appId=${apiKey}`
  ).then((response) => response.json());

  return result;
};
