import axios from 'axios';
const API_KEY = '0860d971e33b73fdc27b2aaaf665f414';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export function fetchWeather(city){
    const URL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(URL);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}