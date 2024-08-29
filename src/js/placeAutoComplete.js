const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('X-Goog-Api-Key', 'AIzaSyClwM-wCFxR51cLqOnXNgqTrWUMUptO_vo');
myHeaders.append('Accept-Language', 'en');

async function getPreview(location) {
  const raw = JSON.stringify({
    input: location,
    includedPrimaryTypes: '(cities)',
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', requestOptions);
    const previewData = await response.json();
    return previewData;
  } catch (error) {
    console.log(error);
    throw error;
  }

  // const preview = await fetch('https://places.googleapis.com/v1/places:autocomplete', requestOptions)
  //   .then((response) => response.json())
  //   .catch((error) => {
  //     console.error(error);
  //     throw error;
  //   });

  // return preview;
}

export default async function fetchPreview(location, setLocation) {
  const previewData = await getPreview(location);
  const previewList = [];
  previewData.suggestions.map((placeList, i) => {
    previewList.push(placeList.placePrediction.text.text);
  });
  setLocation(previewList);
}
