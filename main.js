import { Weather } from './weather.js';

const weather = new Weather();

let temperatureParagraph = document.getElementById("temperature-info");
let conditionParagraph = document.getElementById("condition-info");
let cloudinessParagraph = document.getElementById("cloudiness-info");

function displayWeatherAtRefresh(){
  temperatureParagraph.innerText = `Temperature: ${weather.randomTemperature()}`;
  conditionParagraph.innerText = `Condition: ${weather.randomCondition()}`;
  cloudinessParagraph.innerText = `Cloudiness: ${weather.randomCloudiness()}`;
}

//task 2. Find a way to change weather conditions every 3 minutes. setInterval(function, milliseconds) will run the code every millisecond argument
//task 3 function that randomizes the values in the weather object
// Adding everything inside arrow function, so the code will only run when the interval is reached(180 000ms = 3min) and not immediately when the code runs
function updateWeatherConditions(){

  displayWeatherAtRefresh(); // calling the function that ensures that we get initial values when opening the website instead of waiting 3 minutes for the interval

  setInterval(() => {
    // randomizing the values every 180 000ms/3min
    weather.randomTemperature();
    weather.randomCondition();
    weather.randomCloudiness();

    // Checking the function by logging to console
    console.log(`The temperature is: ${weather.temperature} degrees`);
    console.log(`The condition is: ${weather.condition}`);
    console.log(`The cloudiness is at: ${weather.cloudiness}%`);

    // task 4. display the weather in index.html
    temperatureParagraph.innerText = `Temperature: ${weather.randomTemperature()}`;
    conditionParagraph.innerText = `Condition: ${weather.randomCondition()}`;
    cloudinessParagraph.innerText = `Cloudiness: ${weather.randomCloudiness()}`;
  }, 180000) // <-- everything updates every 180 000ms/3 min
}

updateWeatherConditions(); // Calling the function that randomizes and displays the values of temp,condition and cloudiness in the index file

if (weather.temperature <= -10 && weather.condition === 'snow' ){ // checking if the weather is less than -10 AND if it snows
  alert(`Do NOT go outside! The temperature is ${weather.temperature} and it is ${weather.condition}ing`)
}

