var logic = {
request: function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
},

//accessing weather API
getWeather: function (postcode, callback) {
  var shortPostcode = postcode.slice(0, -3).trim();
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  url += shortPostcode + ',GB';
  url += '&appid=' + weatherApiKey;
  request(url, callback);
},


function getTravel(postcode,callback){
  var shortPostcode = postcode.slice(0, -3);
  var url = 'https://api.tfl.gov.uk/Journey/JourneyResults/'
  url += shortPostcode + '/to/e2%200sy'
  request(url,callback)
}
}

// window.onload = function() {
//   getWeather('E20SY', function(response) {
//     console.log(response);
//   });
// };

// travel APi
/*
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
*/
kToC: function (kelvin){
return  kelvin - 273.15;
}
};
module.exports=(logic);
module.exports=XHRFunctions;
