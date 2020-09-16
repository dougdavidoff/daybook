// You have a 'moment' global here
const today = moment();
console.log(today.format());

const thisDay = moment();
console.log(
"Today's date is: " + 
//   thisDay.format('YYYY-MM-DD')
thisDay.format('[Today is] dddd, MMMM Do YYYY?'));


var topToday = document.getElementById("currentDay");
topToday.textContent = thisDay.format('[Today is] dddd, MMMM Do, YYYY.');