//travel changes
document.getElementById("search-button").addEventListener('click', function(e){
  e.preventDefault();
  console.log(document.getElementById("post-search").value);
})
//weather changes
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
