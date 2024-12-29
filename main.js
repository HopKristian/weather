import { Weather } from './weather.js';

const weather = new Weather();

// section container for the paragraphs
let sectionContainerForWeatherInfo = document.getElementById("weather-info")
// paragraph for temperature -> -10 to 30 degrees
let temperatureParagraph = document.getElementById("temperature-info");
// paragraph for conditions -> snow, clear, rain
let conditionParagraph = document.getElementById("condition-info");
// paragraph for cloudiness -> 0-100%
let cloudinessParagraph = document.getElementById("cloudiness-info");

function displayWeatherAtRefresh(){
  temperatureParagraph.innerText = `Temperature: ${weather.randomTemperature()}°C`;
  conditionParagraph.innerText = `Condition: ${weather.randomCondition()}`;
  cloudinessParagraph.innerText = `Cloudiness: ${weather.randomCloudiness()}%`;
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
    console.log(`The temperature is: ${weather.temperature} °C`);
    console.log(`The condition is: ${weather.condition}`);
    console.log(`The cloudiness is at: ${weather.cloudiness}%`);

    // task 4. display the weather in index.html
    temperatureParagraph.innerText = `Temperature: ${weather.randomTemperature()} °C`;
    conditionParagraph.innerText = `Condition: ${weather.randomCondition()}`;
    cloudinessParagraph.innerText = `Cloudiness: ${weather.randomCloudiness()}%`;
  }, 180000) // <-- everything updates every 180 000ms/3 min 
}

updateWeatherConditions(); // Calling the function that randomizes and displays the values of temp,condition and cloudiness in the index file



if(weather.condition === 'snow'){
  sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #d0f0ff, #e0f7ff, #e6e6fa)';
  if(weather.temperature <= -10){
    alert(`Do NOT go outside! The temperature is ${weather.temperature} and it is ${weather.condition}ing`);
  }
} else if(weather.condition === 'clear'){
  sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #FF4500, #FEB47B, #FFEE93)';
    if(weather.temperature >= 20){
      alert(`The weather is ${weather.condition}, and the temperature is ${weather.temperature}. Time to find your T-shirt and shorts`);
  }
} else{ // for when the weather is not snow or clear, so when raining!
  sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #4A4A4A, #2C3E50, #6B8CA6)';
  if(weather.cloudiness >= '85'){ // If it is raining and there are more than 85% clouds in the sky, say that its a lot of rain
    alert(`There are ${weather.cloudiness}% clouds today, and there will be a lot of rain`);
  }
}