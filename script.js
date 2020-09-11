//console.log(moment().hours());

//var today = moment();
//console.log("Today's date is: " + 
//today.format("YYYY-MM-DD")
//);

//Add current date to the header

var rightNow = moment().format("MMMM-DD-YYYY HH:mm");

var $title = $("#currentDay");
    $title.text(rightNow);



