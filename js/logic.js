console.log("hi")
var tflJourneyURL= "https://api.tfl.gov.uk/Journey/JourneyResults/tw9%204aa/to/e2%200sy";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var tflArray = JSON.parse(xhr.responseText);
        console.log(tflArray.journeys[0].duration);
        console.log(tflArray.journeys[0].startDateTime);
        console.log(tflArray.journeys[0].arrivalDateTime);
        console.log()
        tflArray.journeys[0].legs.forEach(function(leg){
          console.log(leg.duration)
          console.log(leg.mode.name)
          console.log(leg.instruction.summary)
        })

        //console.log(tflArray.journeys[0])
    }
};
xhr.open("GET", tflJourneyURL, true);
xhr.send();
