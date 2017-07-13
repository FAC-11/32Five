var test = require('tape');
var logic = require("../js/logic.js")

//testing kelvin to celcius
test("ktoC should convert temperature from Kelvin to Celcius", function(t){
var expected = 0;
var actual = logic.kToC(273.15);
t.equal(actual, expected, "an input of 273.15 should return 0")
t.end()
});


//testing postcode validator
test("function 'validatedPostcode' should validate postcodes", function(t){
  var expected = false;
  var actual =  logic.validatedPostcode('r21k');
  t.equal(actual, expected, "an input of r21k should return false")
  t.end()
});

test("function 'validatedPostcode' should validate postcodes", function(t){
  var expected = true;
  var actual =  logic.validatedPostcode('WC2H 7LT');
  t.equal(actual, expected, "an input of WC2H 7LT should return true")
  t.end()
});

test("function 'validatedPostcode' should validate postcodes", function(t){
  var expected = true;
  var actual =  logic.validatedPostcode('E1   1AF    ');
  t.equal(actual, expected, "an input of 'E1   1AF    ' should return true")
  t.end()
});

// testing postcode shortener
test("function 'shortPostcode' should remove last 3 alphanumeric characters", function(t){
  var expected = "E1";
  var actual =  logic.shortPostcode('E1   1AF    ');
  t.equal(actual, expected, "an input of 'E1   1AF    ' should return 'E1''")
  t.end()
});
