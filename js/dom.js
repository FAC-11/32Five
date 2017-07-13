//travel changes
var summaryContainer = document.getElementById('js-summary');
var detailsContainer = document.getElementById("details-container");
var infoContainer = document.getElementById("map-container");
var transportIcons = {
    'walking':"hello",
    'bus':"hello",
    'national-rail':"hello",
    'tube': "hello"

};

// Add postcode and run events
document.querySelector(".postcode__submit").addEventListener('click', function(e){
    e.preventDefault();
    console.log(document.querySelector(".postcode__input").value);
    var postcode = document.querySelector(".postcode__input").value;
    if (postcode){
        logic.getTravel(postcode, travelCallback);
        logic.getWeather(postcode, function(response){
            //console.log(response);
            weatherCallback(response);
        });
    }

});

var travelCallback = function(response){


    var mode = "";
    response.journeys[0].legs.forEach(function(leg){
      mode += leg.mode.name + ' ';
    })
  var summaryDurationNode = document.getElementById('js-duration');
  var summaryModeNode = document.getElementById('js-modes');
  var summaryArrivalNode = document.getElementById('js-arrival');
  summaryModeNode.textContent = mode;
  summaryDurationNode.textContent = "Total duration: " + response.journeys[0].duration + ' minutes';
    summaryArrivalNode.textContent = "Arrival Time: " + response.journeys[0].arrivalDateTime;


    detailsContainer.innerHTML = "";
    response.journeys[0].legs.forEach(function(leg){
    //  console.log(leg);
      var detailsNode = document.createElement('ul');
      var detailsListNode1 = document.createElement('li');
      var detailsListNode2 = document.createElement('li');
      var detailsListNode3 = document.createElement('li');
      var detailsSpan1 = document.createElement('span');
      detailsSpan1.textContent = "Duration: " + leg.duration;
      var detailsSpan2 = document.createElement('span');

      detailsSpan2.textContent = "Mode: " + leg.mode.name;
      var detailsSpan3 = document.createElement('span');
      detailsSpan3.textContent = "Instructions: " + leg.instruction.summary
      detailsListNode1.appendChild(detailsSpan1);
      detailsListNode2.appendChild(detailsSpan2);
      detailsListNode3.appendChild(detailsSpan3);

      detailsNode.appendChild(detailsListNode1);
      detailsNode.appendChild(detailsListNode2);
      detailsNode.appendChild(detailsListNode3);
      detailsContainer.appendChild(detailsNode);


   })
};



var weatherCallback = function(response) {
  var weatherTempNode = document.getElementById('js-weather__temp');
  var weatherDescriptionNode = document.getElementById('js-weather__description');
  var temp = logic.kToC(response.main.temp);
  weatherTempNode.textContent = Math.round(temp);
  var weatherDescription = response.weather[0].descripton;
  var iconId = response.weather[0].icon;
 var weatherClass= logic.weatherIcons[iconId];
 document.getElementById("js-weather__icon").classList.add(weatherClass);


};

// var mode = [];
// response.journeys[0].legs.forEach(function(leg){
//     mode.push(leg.mode.name) ;
// });
//
// summarySpan2.textContent = "Mode(s): " + mode.forEach(function (x) {
//         console.log(x);
//         console.log(transportIcons[x]);
//
//         // var icon = document.createElement('img');
//         // icon.src=transportIcons[x];
//
//     });