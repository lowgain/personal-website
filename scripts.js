// Get Element
const $ = element => document.getElementById(element);

// Make a timer

function timer(func, interval) {
  func();
  setInterval(func, interval);
}

//
// format date and time display
//

function displayDate() {
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  const weekdays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ];
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];

  if (hour == 0) { hour = 12 };
  if (hour > 12) { hour -= 12};

  $("clock").innerHTML = `${hour}:${minutes}`;
  $("date").innerHTML = month + ", " + day;
  $("day").innerHTML = weekday;
}
timer(displayDate, 5000);

//
// Display a random bonsai plant
//

async function displayBonsai() {
  let data = await fetch("./bonsais.json")
    .then(response => response.json());

  $("bonsai").innerHTML = data.bonsais[Math.floor(Math.random() * data.bonsais.length)];
}
displayBonsai();
