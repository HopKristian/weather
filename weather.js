// task 1
export class Weather{ // setting this class as export as we are using its values and methods in main
  constructor(temperature, condition, cloudiness){

    this.temperature = temperature;
    this.condition = condition;
    this.cloudiness = cloudiness;
  } // end of constructor


  randomTemperature(){
    const minTemp = -50;
    const maxTemp = 30;
    /* maxTemp - minTemp gives us the length of the interval, which is 30 - (-10) + 1 = 41(41 to include 30 when randomizing, since floor rounds down),
     and + minTemp will tell us that we start from the -10 position*/
    let randomize = Math.floor(Math.random() * (maxTemp - minTemp + 1) + minTemp);
    
    return this.temperature = randomize; // returning the new randomized value
  }

  randomCondition(){
    const conditionAlternatives = ["clear", "rain", "snow"]; /* assigning a variable the holds the value of the different condition types */
    const randomIndexValue = Math.floor(Math.random() * conditionAlternatives.length); /* getting a random value from the length of the list, in the range of index 0 to index 2 */
    
    return this.condition = conditionAlternatives[randomIndexValue]; /* from the list we randomize the value inside with the variable randomIndexValue*/
  }

  randomCloudiness(){
    const minCloudPercentage = 0; // Min percentage possible
    const maxCloudPercentage = 100; // Max percentage possible
    let randomPercentage = Math.floor(Math.random() * (maxCloudPercentage - minCloudPercentage +1)); // since we're using floor i have to add +1 into the calculation to include 100%
    
    return this.cloudiness = randomPercentage; // returning the new randomized value
  }
} // end of class