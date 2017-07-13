//travel changes
var summaryContainer = document.getElementById('js-summary');
var detailsContainer = document.getElementById("details-container");
var infoContainer = document.getElementById("map-container");


// Add postcode and run events
document.querySelector(".postcode__submit").addEventListener('click', function(e){
    e.preventDefault();
    console.log(document.querySelector(".postcode__input").value);
    var postcode = document.querySelector(".postcode__input").value;
    logic.getTravel(postcode, travelCallback);
});

var travelCallback = function(response){
    var summaryNode = document.createElement('ul');
    var summaryListNode1 = document.createElement('li');
    var summaryListNode2 = document.createElement('li');
    var summaryListNode3 = document.createElement('li');
    var summarySpan1 = document.createElement('span');
    summarySpan1.textContent = "Total duration: " + response.journeys[0].duration;
    var summarySpan2 = document.createElement('span');
    summarySpan2.textContent = "Modes" + response.journeys[0].startDateTime;
    var summarySpan3 = document.createElement('span');
    summarySpan3.textContent = "Weather";
    summaryListNode1.appendChild(summarySpan1);
    summaryListNode2.appendChild(summarySpan2);
    summaryListNode3.appendChild(summarySpan3);

    summaryNode.appendChild(summaryListNode1);
    summaryNode.appendChild(summaryListNode2);
    summaryNode.appendChild(summaryListNode3);
    summaryContainer.replaceChild(summaryNode,summaryContainer.firstChild);
    console.log(response);
};

//weather changes
window.onload = function() {
  var postcodeSubmit = document.querySelector(".postcode__submit");
  postcodeSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var postcodeInput = document.querySelector(".postcode__input").value;
    logic.getWeather(postcodeInput, function(response){
      //console.log(response);
      weatherCallback(response);
      })
    })
  };

var weatherCallback = function(response) {
  var weatherTempNode = document.getElementById('js-weather__temp');
  var weatherDescriptionNode = document.getElementById('js-weather__description');
  var temp = logic.kToC(response.main.temp);
  weatherTempNode.textContent = Math.round(temp);
  var weatherDescription = response.weather[0].description;
 var weatherClass= logic.weatherIcons[weatherDescription];
 document.getElementById("js-weather__icon").classList.add(weatherClass);

};
