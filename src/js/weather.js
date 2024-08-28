const url = 'http://api.weatherapi.com/v1/current.json';
const key = '3c46694a8b4440ecbf6135945241805';

export default async function getWeatherData(region) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(`${url}?key=${key}&q=${region}&lang=ko`, requestOptions)
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
