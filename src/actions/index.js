import axios from 'axios';

const API_KEY = '8ab5f340292520be90443483a369db0c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;
//we do this to keep our actions types consistent with our reducers
//now it won't matter what the value of the string is, it won't break the action creator
export const FETCH_WEATHER = 'FETCH_WEATHER';

//this action should always pass a city name
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
