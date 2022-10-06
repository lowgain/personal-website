//
// Make a number binary (byte size)
//

let makeBin = (num, pad) => num.toString(2).padStart(pad, "0");

//
// Make a timer
//

function timer(func, interval) {
  func();
  setInterval(func, interval);
}

//
// format date and time display
//

function displayDate() {
  let date = new Date();
  let hour = date.getHours();

  if (hour == 0) { hour = 12 };
  if (hour > 12) { hour -= 12};

  document.getElementById("clock").innerHTML = makeBin(hour, 4) + ":" + makeBin(date.getMinutes(), 6);
  document.getElementById("date").innerHTML = makeBin(date.getMonth(), 4) + ", " + makeBin(date.getDay(), 5);
  document.getElementById("day").innerHTML = makeBin(date.getDay() + 1, 3);
}
timer(displayDate, 5000);
