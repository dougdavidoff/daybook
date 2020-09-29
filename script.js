$(document).ready;

// Present time
const now = moment();
const thisDay = moment();

// Displaying date at top of Daybook planner
var topToday = document.getElementById("currentDay");
topToday.textContent = thisDay.format('[Today is] dddd, MMMM Do, YYYY.');

// Keeping track of current hour for setting 'past', 'present', and 'future' to text blocks for each hour.
var hourNow = moment().get("hour");

var container = $( "#container-parent" )
  
  // loop to set up body of planner inside Daybook
  for(var i = 9; i < 18; i++) {
    var calHour ='t' + i;
    var calShowHour = i;
    
    // Clock aritmatic to show proper hours in planner
    if (i < 12) {
      calShowHour = i + ":00 am"
    } else if (i === 12) {
      calShowHour = "12:00 noon"
    } else {
      calShowHour = i - 12 + ":00 pm"
    }

    // Populating elements of the Daybook planning grid
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
    
    // Adding 'past', 'present', and 'future' colors to grid text areas
    if (i > hourNow) {
      $( "textarea" ).addClass("past")
    } else if (i === hourNow) {
      $( "textarea" ).addClass("present")
    } else {
      $( "textarea" ).addClass("future")
    }

    // Populating grid events from Local Storage
    document.getElementById("text" + i).innerHTML = localStorage.getItem("text" + i);
  }

// Saving new events in Local Storage, with popup confirm box
$(".save-block").click(function(){
  var id = this.id.split("-")[1];
  console.log("ID ", id);
  var key = "text" + id;
  console.log("key", key);
  var storeText = $('#' + key).val()
  localStorage.setItem(key, storeText)
  var popup = $("#success-popup");
  popup.removeClass('hidden').addClass('visible');
});

// Making popup confirm box disappear on click of button
$('#success-popup').click(function() {
  $('#success-popup').removeClass('visible').addClass('hidden');
})