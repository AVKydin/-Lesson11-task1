
setInterval(() => {
  let dd = new Date();
  let day = dd.getDate();
  let month = dd.getMonth() + 1;
  let year = dd.getFullYear();
  let hh = dd.getHours();
  let mm = dd.getMinutes();
  let ss = dd.getSeconds();
  let ms = dd.getMilliseconds();

  if (hh < 10) {
    hh = `0${hh}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (ss < 10) {
    ss = `0${ss}`;
  }
  document.querySelector(".time").innerHTML = `${hh}:${mm}:${ss}`;
  document.querySelector(".date").innerHTML = `${day}.${month}.${year}`;
});

let start = document.querySelector(".start");
let loop = document.querySelector(".loop");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let stopwatch = document.querySelector(".stopwatch");

// button start
start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch,10);
})

  let sms = 0;
  let sss = 0;
  let smm = 0;
  let shh = 0;
  let interval;
  
function zero(i) {
  if (i >= 10) {
    return i;
  } else {
    return `0${i}`
  }
}

function doubleZero(i) {
  if (i >= 100) {
    return i;
  } else {
    return `0${i}`;
  }
}
  
function startStopwatch() {

  if ((sms+=10) == 1000) {
    sms = 0;
    sss++;
  }
  if (sss == 60) {
    sss = 0;
    smm++;
  }
  if (smm == 60) {
    smm = 0;
    shh++;
  }

  document.querySelector(".stopwatch").innerHTML = `${zero(shh)} : ${zero(smm)} : ${zero(sss)} : ${doubleZero(sms)}`;

    start.classList.add("activ-button");
    loop.classList.remove("activ-button");
    stop.classList.remove("activ-button");
    reset.classList.remove("activ-button");
};

//button loop
loop.onclick = function () {
  let p = document.createElement("p");
  p.innerHTML = document.querySelector(".stopwatch").innerHTML;
  p.className = 'p';
  
  document.querySelector(".loop-time").append(p);
  loop.classList.add("activ-button");
  start.classList.remove("activ-button");
  stop.classList.remove("activ-button");
  reset.classList.remove("activ-button");

  if (document.querySelectorAll(".p").length > 7) {
  document.querySelector(".max").style.display = 'block';
  document.querySelector(".loop-time").innerHTML = "";
  }
  
};

//button stop
stop.addEventListener('click', () => {
  clearInterval(interval);
  start.classList.remove("activ-button");
  loop.classList.remove("activ-button");
  stop.classList.add("activ-button");
  reset.classList.remove("activ-button");
})



//button reset
reset.onclick = function () {
  clearInterval(interval);
  sms = 0;
  sss = 0;
  smm = 0;
  shh = 0;
  document.querySelector(".stopwatch").innerHTML = `${zero(shh)} : ${zero(smm)} : ${zero(sss)} : ${doubleZero(sms)}`;
  document.querySelector(".loop-time").innerHTML = "";
  reset.classList.add("activ-button");
  start.classList.remove("activ-button");
  loop.classList.remove("activ-button");
  stop.classList.remove("activ-button");
};


//button Max

let btnMax = document.querySelector(".btn-max");

btnMax.onclick = function () {
  document.querySelector(".max").style.display = "none";
}
  
//button plus

let plus = document.querySelector(".plus");
let countMinutes = document.querySelector(".count-minutes");
let minutes = 25;


plus.onclick = function () {
  countMinutes.innerHTML = +countMinutes.innerHTML + 1;
  document.querySelector(".count-minutes").innerHTML = countMinutes.innerHTML;
  plus.classList.add("activ-button");
  minus.classList.remove("activ-button");
  timerStart.classList.remove("activ-button");
  minutes++;
}

//button minus

let minus = document.querySelector(".minus");
minus.onclick = function () {
  countMinutes.innerHTML = +countMinutes.innerHTML - 1;
  document.querySelector(".count-minutes").innerHTML = countMinutes.innerHTML;
  minus.classList.add("activ-button");
  plus.classList.remove("activ-button");
  timerStart.classList.remove("activ-button");
  minutes--;
};

//  timer

let timerText = document.querySelector(".timer-text");
let timerStart = document.querySelector(".timer-start");

//button START

let intervalTimer

timerStart.addEventListener('click', () => {
  clearInterval(intervalTimer);
  intervalTimer = setInterval(startTimer, 1000);
  timerStart.classList.add("activ-button");
  minus.classList.remove("activ-button");
  plus.classList.remove("activ-button");
  stopTimer.classList.remove("activ-button");
  resetTimer.classList.remove("activ-button");
})

let seconds = +00;


function startTimer() {
  timerText.innerHTML = `${minutes}:${zero(seconds)}`;
  
  if (seconds == 00) {
    seconds = 59;
    minutes--;
  }
  
  timerText.innerHTML = `${minutes}:${zero(seconds)}`;
  seconds--;
};

//button STOP

let stopTimer = document.querySelector(".timer-stop");

stopTimer.onclick = function () {
  clearInterval(intervalTimer);
    stopTimer.classList.add("activ-button");
  timerStart.classList.remove("activ-button");
  resetTimer.classList.remove("activ-button");
  minus.classList.remove("activ-button");
  plus.classList.remove("activ-button");
}

//button RESET

let resetTimer = document.querySelector(".timer-reset");

resetTimer.onclick = function () {
  
  timerText.innerHTML = "00:00";
  clearInterval(intervalTimer);
  resetTimer.classList.add("activ-button");
  stopTimer.classList.remove("activ-button");
  timerStart.classList.remove("activ-button");
  minus.classList.remove("activ-button");
  plus.classList.remove("activ-button");
}
