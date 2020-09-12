//console.log(moment().hours());
console.log("hello world");

//Add current date to the header

var rightNow = moment().format("dddd, MMMM-DD-YYYY hh:mm");

var $title = $("#currentDay");
    $title.text(rightNow);
var plannerContainerEl = $(".plannerContainer");

//Array of business hours 9am-5pm


var dayArray = [
    moment("9:00am" , "hh a"),
    moment("10:00am", "hh a"),
    moment("11:00am", "hh a"),
    moment("12:00pm", "hh a"),
    moment("01:00pm", "hh a"),
    moment("02:00pm", "hh a"),
    moment("03:00pm", "hh a"),
    moment("04:00pm", "hh a"),
    moment("05:00pm", "hh a"),
]

var currentTimeEl = $("#currentTimeEl");
var rightNow = moment().format("LT");
setInterval(function(){
    var now = moment();
    var timeBox = now.format("hh:mm a p");
    currentTimeEl.text(timeBox);

},1000);

//Build container
//Eventlistener?
// var $containerDiv = $(".description");
// $containerDiv.empty();

//1.create el
//2.add content
//3.append

//Loop through array?
for (var i = 0; i < dayArray.length; i++){
var rowDiv = $("<row>");
rowDiv.attr("class", "row time-block");

//console.log(dayArray[i]);
//Build row for each time
var hourSlot = $("<div>");
hourSlot.attr("class", "col-md-2 hour");
hourSlot.text(dayArray[i]);

var textarea = $("<textarea>");
textarea.attr("class", "col-md-8 description");
textarea.text("Enter Event");

var saveButton = $("<button>");
saveButton.attr("class", "col-md-2 saveBtn");
saveButton.text("Save Event");

rowDiv.append(hourSlot);
rowDiv.append(textarea);
rowDiv.append(saveButton);
plannerContainerEl.append(rowDiv);

//Past,present,future

    if(rowDiv.attr("hour") < moment().format("h")){
        rowDiv.addClass("past");
    }else if(rowDiv.attr("hour") > moment().format("h")){
        rowDiv.addClass("future");
    }else{
        rowDiv.addClass("present");
    }

//Store events in local storage
$(document).on("click",".saveBtn", function(event){
    var savedHour = $(this).parent().attr(".hour");
    var savedEvent = $(this).siblings(".description").val().trim();

   localStorage.setItem(savedHour, savedEvent);
   
});


// }
}




//

;