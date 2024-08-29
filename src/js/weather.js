const url = 'http://api.weatherapi.com/v1/current.json';
const key = '3c46694a8b4440ecbf6135945241805';

export default async function getWeatherData(region) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  // await fetch(`${url}?key=${key}&q=${region}&lang=ko`, requestOptions)
  //   .then((response) => response.json())
  //   .catch((error) => {
  //     console.log(error);
  //     throw error;
  //   });
  try {
    const response = await fetch(`${url}?key=${key}&q=${region}&lang=ko`, requestOptions);
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
