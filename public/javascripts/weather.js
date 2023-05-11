const APPID = "ad65dd0c540aae5c8ffef2a3055c8dfa";
const UNIT = "imperial" // or "metric"

let $ = (element) => document.getElementById(element);

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const owmURL = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=${UNIT}&APPID=${APPID}`;
      fetch(owmURL)
        .then(res => res.json())
        .then(data => {
          $('temp').innerHTML = Math.round(data.main.temp) + "&deg;F";
          $('humidity').innerHTML = data.main.humidity + "%";
          $('weather_desc').innerHTML = data.weather[0].description;
          $('windspeed').innerHTML = Math.round(data.wind.speed) + " mph";
          $('wind_direction').innerHTML = data.wind.deg + "&deg;";
          $('weather_icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        });
    },
    (err) => console.error(
        'An error has occured while retrieving, location\n' + err)
  );
} else {
  console.log('geolocation is not enabled on this browser');
}