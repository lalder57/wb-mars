// Alerts

alert("Hello!");
alert("Starting your Mars Adventure!");
alert("Booting up...");
alert("All systems go!");
alert("Let's start!");

// Ask username and give specific prompt

let username = prompt("Hi there. What's your name?");
username = username.trim();

alert(`Hi, ${username} -- Welcome to the Mars Adventure Game.`);
alert("Yesterday you received an email from your good friend at NASA.");
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

// Ask the user a question

let excited = prompt("Are you excited? Type Y or N.");
excited = excited.toUpperCase().trim();


if (excited.startsWith("Y")) {
  alert("I knew you'd say that. It's so cool that you're going to Mars!");
}

if (excited.startsWith("N")) {
  alert("Well, it's too late to back out now.");
}

// Time to pack
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");

numSuitcases = numSuitcases.trim();
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
  alert("That's way too many. You'll have to pack more lightly.");
} else {
  alert("Perfect. You'll certainly fit in the spaceship!");
}

// Companion Animal
alert("You're allowed to bring one companion animal with you.");

const companionType = prompt("What kind of companion animal would you like to bring?");

let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

// Spaceship Decor
alert("NASA has an interior design team offering to outfit your spaceship.");
alert(`You have a couple of options for the interior decor of your ship. Your options are:
  A. Sleek, modern minimalism
  B. Retro/vintage space age
  C. Victorian-era steampunk
  `);

  let decorChoice = prompt("Which of these three decor options do you choose? Type A, B, or C")
  decorChoice = decorChoice.toUpperCase().trim();
  
  let decor;
  if (decorChoice === "A") {
    decor = "Modern minimalism";
  } else if (decorChoice === "B") {
    decor = "Space age";
  } else if (decorChoice === "C") {
    decor = "Steampunk";
  }

// Add another companion animal
alert("The person you were going to be traveling with has fallen ill. That means you get to bring another companion animal to help keep you company. LUCKY YOU!");

const companionType2 = prompt("What other kind of companion animal would you like to bring?");

let companionName2 = prompt("What is your second companion's name?");

let firstLetter2 = companionName2[0];
firstLetter2 = firstLetter2.toUpperCase();

let otherLetters2 = companionName2.slice(1);
otherLetters2 = otherLetters2.toLowerCase();

companionName2 = firstLetter2 + otherLetters2;

alert(`Cool, so you're now bringing ${companionName} the ${companionType} and ${companionName2} the ${companionType2}.`);

// Impress the user
alert(`${username}, ${companionName}, and ${companionName2} surfing the celestial abyss, in a ${decor} spaceship.`);

// Countdown
let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer -= 1;
}
alert(`*** LIFTOFF ***`);


