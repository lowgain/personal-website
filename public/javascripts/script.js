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
  const months = [ 'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const weekdays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ];
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  let amPm;

  switch(true) {
    case hour == 0:
      hour = 12;
      amPm = 'am';
      break;
    case hour < 12:
      amPm = 'am';
      break;
    case hour > 12:
      hour -= 12;
      amPm = 'pm';
      break;
  };

  $("clock").innerHTML = `${hour}:${minute} ${amPm}`;
  $("date").innerHTML = `${weekday} ${month}, ${day}`;
}
timer(displayDate, 5000);

//
// Display a random bonsai plant
//

function displayBonsai() {
  const bonsais = [
    "    #o#\n  ####o#\n #o# \\#|_#,#\n###\\ |/   #o#\n # {}{      #\n    }{{\n   ,'  `",
    "    ,\\\n    # (_\n      _)\\##\n  ###/((_\n       ))\\####\n     _((\n####/  )\\\n     ,;;\"`;,",
    "   ###o\n #o# \\#,_#,#\n###\\ |/   #o#\n # {}{      #\n    }{{\n   ,'  `"
  ]

  $("bonsai").innerHTML = bonsais[Math.floor(Math.random() * bonsais.length)];
}
displayBonsai();
