const unirest = require('unirest');

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(
        'Latitude: ',
        position.coords.latitude,
        '\nLongitude: ',
        position.coords.longitude
      );
    },
    (err) =>
      console.error(
        'An error has occured while retrieving, location',
        err
      )
  );
} else {
  console.log('geolocation is not enabled on this browser');
}
