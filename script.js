var currentHour = moment().hour();
var displayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
$("#currentDay").text(displayDate)

function saveText(event) {
    var text = $(event.target).sibling(".description").val()
    var textTime = $(event.target).siblings(".time").text()
    console.log(text)
    localStorage.setItem(txtTime, text);
}

for (let i = 9; i < 18; i++){
    var tense = "past";
    var hour = moment().hour(i).hour();
    console.log(hour)

    if (currentHour == hour) {
        tense = "present";
    }    else if (hour > currerntHour){
            tense = "future"
        }
    }
    console.log(tense)

    
    
    var hourElement = document.createElement("tr");
    $(hourElement).addClass(tense);
    var time = $("<tb>").addClass("time");
    $(time).text(moment().hour(i).format("ha"));
    var storage = localStorage.getitem(time.text())
    var description = $("<input>").addClass("description").addClass("event").val(storage);
    var btn = $("<button>").text("add event").on("click", saveText);
    $(hourElement).append(time);
    $(hourElement).append(description);
    $(hourElement).append(btn);
    $("#calendar").append(hourElement);







