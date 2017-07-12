window.onload = function() {
  var postcodeSubmit = document.querySelector(".postcode__submit");
  postcodeSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var postcodeInput = document.querySelector(".postcode__input").value;
    getWeather(postcodeInput, function(response){
      console.log(response);
      

      })
    })
  };
