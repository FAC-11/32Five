function request(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

function getWeather(postcode, callback) {
  var shortPostcode = postcode.slice(0, -3);
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  url += shortPostcode + ',GB';
  url += '&appid=' + weatherApiKey;

  request(url, callback);
}

window.onload = function() {
  getWeather('E20SY', function(response) {
    console.log(response);
  });
};
