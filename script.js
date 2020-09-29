$(document).ready;

const now = moment();
console.log(now.format());

const thisDay = moment();
console.log(
"Today's date is: " + 
thisDay.format('[Today is] dddd, MMMM Do YYYY?'));


var topToday = document.getElementById("currentDay");
topToday.textContent = thisDay.format('[Today is] dddd, MMMM Do, YYYY.');

// // Check browser support
// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("lastname", "Smith");
//   // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }


  var hourNow = moment().get("hour");
  console.log("The current hour is " + hourNow);

  var container = $( "#container-parent" )
    for(var i = 9; i < 18; i++) {
      var calHour ='t' + i;
      var calShowHour = i;
      if (i < 12) {
        calShowHour = i + ":00 am"
      } else if (i === 12) {
        calShowHour = "12:00 noon"
      } else {
        calShowHour = i - 12 + ":00 pm"
      }
      var sectionDiv = $(document.createElement('div')).addClass('time-block').text(calShowHour);
      var textAreaEl = $(document.createElement('textarea')).addClass('text-block').attr('id', 'text' + i);

      var icon = $(document.createElement('i')).addClass('fas fa-save');
      var saveDiv = $(document.createElement('button')).addClass('save-block').addClass("save" + i).append(icon).attr("id", "button-" + i);
      var newSection = document.createElement('section');
      newSection.id = calHour;
      container.append(newSection);
      var fetchedSection = $('#' + calHour )
      fetchedSection.append(sectionDiv)
      fetchedSection.append(textAreaEl)
      fetchedSection.append(saveDiv)
      if (i > hourNow) {
        $( "textarea" ).addClass("past")
      } else if (i === hourNow) {
        $( "textarea" ).addClass("present")
      } else {
        $( "textarea" ).addClass("future")
      }

      document.getElementById("text" + i).innerHTML = localStorage.getItem("text" + i);


      // document.getElementById('text' + i).addEventListener("click", function() {
      //   console.log("The 'text" + i +"' button was clicked.")
      // });


    }


$(".save-block").click(function(){
  alert("A save icon was clicked.")
  console.log("This.ID ", this.id);
  var id = this.id.split("-")[1];
  console.log("ID ", id);
  var key = "text" + id;
  console.log("key", key);
  var storeText = $('#' + key).val()
  localStorage.setItem(key, storeText)
});
  // for(i = 9; i <18; i++) {
  //   var textAreaName = 
  //   localStorage.setItem("save" + i)
  // }

    



