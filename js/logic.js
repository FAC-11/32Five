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
        logic.request(url, callback);
    },

// icons for weather types
weatherIcons: {
"01d": "wi-day-sunny",
"02d": "wi-day-sunny-overcast",
"03d": "wi-day-cloudy",
"04d": "wi-cloudy",
"09d": "wi-showers",
"10d": "wi-rain",
"11d": "wi-thunderstorm",
"13d":"wi-snowflake-cold",
"50d": "wi-fog",
"01n": "wi-stars",
"02n": "wi-night-alt-cloudy",
"03n": "wi-cloud",
"04n":"wi-cloudy",
"09n": "wi-night-alt-showers",
"10n":"wi-night-alt-rain",
"11n":"wi-night-alt-storm-showers",
"13n":"wi-snowflake-cold",
"50n": "wi-night-fog"
},

    getTravel: function(postcode,callback){
        var url = 'https://api.tfl.gov.uk/Journey/JourneyResults/';
        url += postcode + '/to/e2%200sy';
        logic.request(url,callback);
    },


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
