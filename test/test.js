var test = require('tape');
var logic = require("../js/logic.js")

//testing kelvin to celcius
test("ktoC should convert temperature from Kelvin to Celcius", function(t){
var expected = 0;
var actual = logic.kToC(273.15);
t.equal(actual, expected, "an input of 273.15 should return 0")
t.end()
});
