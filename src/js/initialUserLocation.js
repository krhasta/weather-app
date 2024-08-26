const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  return crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  throw err;
}

async function getCurLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(success(pos)),
      (err) => reject(error(err)),
      options
    );
  });
}

async function getLatLong() {
  try {
    const response = await getCurLocation();
    const latLong = `${response.latitude},${response.longitude}`;
    return latLong;
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
}

async function getLocationData(address) {
  const locationData = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyClwM-wCFxR51cLqOnXNgqTrWUMUptO_vo`,
    {
      method: 'GET',
      headers: {
        'Accept-Language': 'en',
      },
      redirect: 'follow',
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      throw error;
    });
  return locationData; // 응답 본문 문자열 반환
}

export default async function fetchInitLocation(setLocation, setCountry) {
  // try {
  const initLatLong = await getLatLong();
  const locationData = await getLocationData(initLatLong);
  const locationRes = locationData.results[0].address_components;

  console.log(locationRes[3].long_name);
  setLocation(locationRes[3].long_name); // city name
  setCountry(locationRes[4].short_name); // country name
}
