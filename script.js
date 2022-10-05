var currentHour = moment().hour();
//console.log(currentHour)
for (let i = 9; i < 18; i++){
    var tense = "past";
    var hour = moment().hour(i).hour();
    console.log(hour);
    if (currentHour == hour) {
        tense = "present";
    }   else if (hour > currentHour){
        tense = "future";
    } 
    console.log(tense)
       
    var hourElement = document.createElement("tr");
    $(hourElement).addClass(tense);
    var time = $(document.createElement("td")).addClass("time"); //$ calls jquery//
    var description = $(document.createElement("td")).addClass("description").addClass("event");
    $(time).append(moment().hour(i).format("ha"));
    $(hourElement).append(time);
    $(hourElement).append(description);
    $("#calendar").append(hourElement);
    //console.log(moment().hourElement(i).hourElement());
    //console.log(moment().hourElement(i).format("ha"));
}


//edit events

