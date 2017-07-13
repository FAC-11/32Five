# FACcy Mapper
_The best travel/weather app ever conceived?!?!_

## Why
Sally struggles to get to FAC everyday, and often gets caught in the rain. She
would love to be able to check her route and also be informed of what she may need
to bring with her to combat the elements.

## What
FACcy Mapper has three main features:
* A route planner for getting to FAC from the users location
* Weather information for key stages of the journey
* Suggestions of what the user may want to pack to protect themselves from the
  weather.

### Stretch Goals
- [x] Different icons at night time
- [ ] Error message, e.g. 'postcode not found'
- [x] Details for each leg of journey
- [ ] Weather for each (non-tube?) leg of journey
- [ ] Display delays

## How
Our app depends on two APIs - the TFL API, and a weather API. We started by
roughly "mapping" out or system architecture and site wireframe.

### Hiding the API keys
In order to keep our API keys secret we created an 'config.js' file where we
stored our API keys as global variables. We added a reference to this
javascript file in our index.html file, above the rest of our Javascript files:
```
<script type='text/javascript' src='config.js'></script>
<script type='text/javascript' src='logic.js'></script>
...
```
and then added the 'config.js' file to our gitignore file.

If you'd like to run our site locally, you will need to get your own API keys
from TfL and OpenWeatherMap, and create your own
'config.js' in the projects root directory. This should contain two global variables:
```
var weatherApiKey = <your-key>;
var travelApiKey = <your-key>;
```

### How did you split up the the work?
Based on our initial design ideas, we split the work into GitHub issues before
dividing these up and assigning them to our pairs.

### How did you choose to pair?
Our initial pairings were random, however we wanted to make sure that every
member of the team spent some time on both APIs. We decided to swap one member
of each pair every half day. We also wanted to ensure that when moving to a new
pair, there would always be one member of the pair who had worked on the
current topic before. We felt that this would efficiently ensure that everyone
would be familiar with the entire codebase.
