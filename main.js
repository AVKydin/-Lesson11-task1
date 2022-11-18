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

let setD = new Date(2022, 10, 98, 12, 00, 00);
console.log(setD);
console.log(setD.getTime());



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

setInterval(() => {
  let dd = new Date();
  let hh = dd.getHours();
  let mm = dd.getMinutes();
  let ss = dd.getSeconds();
  if (hh < 10) {
    hh = `0${hh}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (ss < 10) {
    ss = `0${ss}`;
  }
  document.querySelector(".digital-clock").innerHTML = `${hh}:${mm}:${ss}`;
})