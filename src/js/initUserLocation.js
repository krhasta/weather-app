import getWeatherData from './weather';

export default async function initialWeather() {
  const response = await fetch('/getUserIP', {
    method: 'GET',
    redirect: 'follow',
  });
  const IP = await response.text();
  const data = await getWeatherData(IP);
  console.log('Data fetched: \n', data);

  return data;
}
