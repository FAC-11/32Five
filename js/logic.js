var logic = {
  request: function(url, callback) {
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
  getWeather: function(postcode, callback) {
    logic.request(logic.weatherUrl(postcode), callback);
  },


  // accessing tfl API
  getTravel: function(postcode, callback) {
    var url = 'https://api.tfl.gov.uk/Journey/JourneyResults/';
    url += postcode + '/to/e2%200sy';
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
    "13d": "wi-snowflake-cold",
    "50d": "wi-fog",
    "01n": "wi-stars",
    "02n": "wi-night-alt-cloudy",
    "03n": "wi-cloud",
    "04n": "wi-cloudy",
    "09n": "wi-night-alt-showers",
    "10n": "wi-night-alt-rain",
    "11n": "wi-night-alt-storm-showers",
    "13n": "wi-snowflake-cold",
    "50n": "wi-night-fog"
  },
  weatherSuggestions: {
    "01d": "sunnies",
    "02d": "sunnies",
    "03d": "vitamin D supplements",
    "04d": "vitamin D supplements",
    "09d": "brolly",
    "10d": "brolly",
    "11d": "raincoat",
    "13d": "mittens",
    "50d": "torch",
    "01n": "telescope",
    "02n": "telescope",
    "03n": "vitamin D supplements",
    "04n": "vitamin D supplements",
    "09n": "brolly",
    "10n": "brolly",
    "11n": "raincoat",
    "13n": "mittens",
    "50n": "torch"
  },

  // converting temperature from kelvin to celcius
  kToC: function(kelvin) {
    return kelvin - 273.15;
  },


  // constructing the entered postcode into correct api request
  weatherUrl: function(postcode) {
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    weatherUrl += logic.shortPostcode(postcode) + ',GB';
    weatherUrl += '&appid=' + weatherApiKey;
    return weatherUrl;
  },

  // cheking postcode is valid true/false
  validatedPostcode: function(postcode) {
    var newPostcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
    return regex.test(newPostcode);
  },

  // shortening postcode to be compatible with openweathermap API call
  shortPostcode: function(postcode) {
    return postcode.trim().slice(0, -3).trim();
  }
};



if (typeof module !== 'undefined') {
  module.exports = (logic);

}
