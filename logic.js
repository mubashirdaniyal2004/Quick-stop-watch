let hour = 0;
let min = 0;
let sec = 0;
let millisec = 0;

let timer = false;

function start() {
  timer = true;
  myFun();
}

function stop() {
  timer = false;
  myFun();
}

function rst(params) {
  location.reload();
}

function myFun() {
  if (timer == true) {
    millisec = millisec + 1;
    if (millisec == 100) {
      sec = sec + 1;
      millisec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hour = hour + 1;
      min = 0;
    }

    setTimeout("myFun()", 10);
    document.getElementById("millisec").innerHTML = millisec;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hour").innerHTML = hour;
  }
}
