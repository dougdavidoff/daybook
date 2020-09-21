// You have a 'moment' global here
const now = moment();
console.log(now.format());

const thisDay = moment();
console.log(
"Today's date is: " + 
//   thisDay.format('YYYY-MM-DD')
thisDay.format('[Today is] dddd, MMMM Do YYYY?'));


var topToday = document.getElementById("currentDay");
topToday.textContent = thisDay.format('[Today is] dddd, MMMM Do, YYYY');

$("#t1300").attr("class","future");
// $(".text-block").attr("class","future");
// $("#text1300").attr("class","future");

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    // localStorage.setItem("lastname", "Davidoff");
    // Retrieve
    document.getElementById("text1000").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("text1000").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


