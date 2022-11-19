// setTimeout(function () {
//     document.write(`<h2>setTimeout</h2>`);
// }, 2000)

// let timeoutID;

// function startTimeout() {
//   timeoutID = setTimeout( ()=> {
//     document.querySelector(".blockTimeout").innerHTML = `<h2>setTimeout</h2>`;
//   }, 2000);
// }

// function stopTimeout() {
//     clearTimeout(timeoutID);
// }

// setInterval(function () {
//      document.write(`<h2>setInterval</h2>`);
// }, 2000)

// let intervalID;

// function createElement() {
//      let h2 = document.createElement('h2');
//      h2.textContent = 'setInterval';
//      document.querySelector(".blockInterval").append(h2);
// //      if (document.querySelector(".blockInterval").children.length >= 5) {
// //   clearInterval(intervalID);
    
// //      }
     
// }

// function startInterval() {
//      intervalID = setInterval(createElement, 2000);
//      document.querySelector(".start").disabled = true;
//      document.querySelector(".stop").disabled = false;
// };

// function stopInterval() {
//      clearInterval(intervalID);
//      document.querySelector(".start").disabled = false;
//      document.querySelector(".stop").disabled = true;
// };

// let d = new Date();
// console.log(d);
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTimezoneOffset());

// console.log(new Date(2020, 6, 1, 12, 00, 00));

// let setD = new Date(2020, 6, 1, 12, 00, 00);

// let start = d.getTime();
// let end;

// setTimeout(() => {
//      end = new Date().getTime();
//      console.log(start);
//      console.log(end);
//      console.log(end - start);
   
// }, 1000);

// console.log(d.getTime());
// console.log(d.getTime());

// let setD = new Date(2022, 10, 98, 12, 00, 00);
// console.log(setD);
// console.log(setD.getTime());



// function checkTime() {
//      setInterval(() => {
//        let currentD = new Date();
//        let rizn = setD.getTime() - currentD;


       // console.log(currentD);
       // console.log(currentD.getTime());
       // console.log(rizn);
       // let hours = parseInt(rizn / (60 * 60000));
       // let minutes = rizn / (60 * 1000);

       // let seconds = rizn / 1000;
       // let minutes = seconds / 60;
       // let hours = minutes / 60;
       // console.log(hours);
       // console.log(minutes);
       // console.log(seconds);

    //    let hours = Math.floor((rizn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //    let minutes = Math.floor((rizn % (1000 * 60 * 60 )) / (1000 * 60));
    //    let seconds = Math.floor((rizn % (1000 * 60 )) / 1000 );
    //   //  console.log(hours);
    //   //  console.log(minutes);
    //   //  console.log(seconds);
    //    document.querySelector(".coutDown").innerHTML = `${hours}:${minutes}:${seconds}`;
    //  }, 1000)
      
// }
// checkTime();

// setInterval(() => {
//   let dd = new Date();
//   let hh = dd.getHours();
//   let mm = dd.getMinutes();
//   let ss = dd.getSeconds();
//   if (hh < 10) {
//     hh = `0${hh}`;
//   }
//   if (mm < 10) {
//     mm = `0${mm}`;
//   }
//   if (ss < 10) {
//     ss = `0${ss}`;
//   }
//   document.querySelector(".digital-clock").innerHTML = `${hh}:${mm}:${ss}`;
// })

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
  document.querySelector(".time").innerHTML = `${hh}:${mm}:${ss}:${ms}`;
  document.querySelector(".date").innerHTML = `${day}.${month}.${year}`;
});

let start = document.querySelector(".start");
let loop = document.querySelector(".loop");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let stopwatch = document.querySelector(".stopwatch");

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

loop.onclick = function () {
  loop.classList.add("activ-button");
  start.classList.remove("activ-button");
  stop.classList.remove("activ-button");
  reset.classList.remove("activ-button");
};


stop.onclick= function() {
  stop.classList.add("activ-button");
  start.classList.remove("activ-button");
  loop.classList.remove("activ-button");
  reset.classList.remove("activ-button");
};

reset.onclick = function () {
  reset.classList.add("activ-button");
  start.classList.remove("activ-button");
  loop.classList.remove("activ-button");
  stop.classList.remove("activ-button");
  };
  

