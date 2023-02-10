let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false; 

let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber + 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Race-number ${raceNumber}, your race will start at 9:30am`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Race-number ${raceNumber}, your race will start at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Race-number ${raceNumber}, your race will start at 12:30pm`);
} else {
  console.log(`Race-number ${raceNumber}, see the registration desk`);
}

