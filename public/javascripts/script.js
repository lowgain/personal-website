// Get Element
const $ = element => document.getElementById(element);

//
// format date and time display
//

function displayDate() {
  const date = new Date();
  $("clock").innerHTML = date.toLocaleTimeString();
  $("date").innerHTML = date.toDateString();
}
displayDate();
setInterval(displayDate, 1000);

//
// Display a random bonsai plant
//

const bonsais = [
  "    #o#\n  ####o#\n #o# \\#|_#,#\n###\\ |/   #o#\n # {}{      #\n    }{{\n   ,'  `",
  "    ,\\\n    # (_\n      _)\\##\n  ###/((_\n       ))\\####\n     _((\n####/  )\\\n     ,;;\"`;,",
  "   ###o\n #o# \\#,_#,#\n###\\ |/   #o#\n # {}{      #\n    }{{\n   ,'  `"
]

$("bonsai").innerHTML = bonsais[Math.floor(Math.random() * bonsais.length)];
