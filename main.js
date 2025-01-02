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


// variable to get the body element
let bodyElement = document.body;


// outer modal-container
let modalContainer = document.getElementById("modal-container");
// Modal part holding the content inside the container
let modalContentContainer = document.getElementById("modal-content-container");
// warning text for when temp is either cold or warm
let ModalHazardWarningParagraph = document.querySelector(".modal-warning-text");
// Button in the modal-content-container that will close the menu
let hazardWeatherButton = document.getElementById("hazard-button");

function displayWeatherAtRefresh(){
  // setting initial values before the interval start updates(after 3 min)
  temperatureParagraph.innerText = `Temperature: ${weather.randomTemperature()}°C`;
  conditionParagraph.innerText = `Condition: ${weather.randomCondition()}`;
  cloudinessParagraph.innerText = `Cloudiness: ${weather.randomCloudiness()}%`;

  //At the same time we set initial background colors depending on the weather condition
  if(weather.condition === 'snow'){
    bodyElement.style.backgroundColor = '#93E7FB';
    sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #d0f0ff,rgb(82, 94, 163),rgb(41, 41, 183))';
  }
  else if(weather.condition === 'clear'){
    bodyElement.style.backgroundColor = '#F6E906';
    sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #FF4500, #FEB47B, #FFEE93)';
  }
  else{
    bodyElement.style.backgroundColor = '#525152';
    sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #4A4A4A, #2C3E50, #6B8CA6)';
  }
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

    if(weather.condition === 'snow'){
      sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #d0f0ff,rgb(82, 94, 163),rgb(41, 41, 183))'; // using backgroundImage, since it is needed to make a gradient of colors
      bodyElement.style.backgroundColor = '#93E7FB'; //if its snowing we make the background lightblue
      if(weather.temperature <= -10){
        modalContainer.classList.remove("hidden");
        ModalHazardWarningParagraph.innerText = `It is ${weather.temperature}°C and it is ${weather.condition}ing. Do not go outside!`;
        modalContainer.classList.add("hazard-warning-blink-snow"); // making it blink whenever it is snowing AND less than -10 degrees
      }
    } else if(weather.condition === 'clear'){
      sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #FF4500, #FEB47B, #FFEE93)';
      bodyElement.style.backgroundColor = '#F6E906';
        if(weather.temperature >= 20){
          modalContainer.classList.remove("hidden");
          ModalHazardWarningParagraph.innerText = `The weather is ${weather.condition}, and the temperature is ${weather.temperature}. Time to find your T-shirt and shorts(remember sunscreen!)`;
          modalContainer.classList.add("hazard-warning-blink-clear-weather");
      }
    } else{ // for when the weather is not snow or clear, so when raining!
      sectionContainerForWeatherInfo.style.backgroundImage = 'linear-gradient(90deg, #4A4A4A, #2C3E50, #6B8CA6)';
      bodyElement.style.backgroundColor = '#525152';
      if(weather.cloudiness >= '85'){ // If it is raining and there are more than 85% clouds in the sky, say that its a lot of rain
        modalContainer.classList.remove("hidden");
        ModalHazardWarningParagraph.innerText = `There are ${weather.cloudiness}% clouds today, and there will be a lot of rain. Do not forget an umbrella!`;
        modalContainer.classList.add("hazard-warning-blink-rain-weather");
      }
    }
  }, 18000) // <-- everything updates every 180 000ms/3 min 
}

updateWeatherConditions(); // Calling the function that randomizes and displays the values of temp,condition and cloudiness in the index file




// adding an eventlistener that adds the hidden class in css with the property display:none, effectively closing the modal menu
hazardWeatherButton.addEventListener('click', () =>{
  modalContainer.classList.add("hidden");
});


// TODO: Since the conditional statements are inside the interval, i want to find a way so the code is paused until the button closing the modal menu is clicked
// TODO: Make conditionals e.g. when its negative degrees but raining, snowing while positive degrees etc.
// TODO: Make the style look better. right now its ugly
// TODO: Add methods for closing the modalContainer, as the code is re-used a lot. Do the same for the 