/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const hasSword = false;
  const hasCompass = true;
  const action = readline.question("A giant appears! Do you 'fight' or 'run'? ");
  if (action === "fight" && hasSword) {
    console.log("You slay the giant with your sword!");
  } else if (action === "fight" && !hasSword && hasCompass) {
    console.log("You use your compass to find a weak spot and escape!");
  } else {
    console.log("You run away safely.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  const hasCompass = true;
  if (!hasTorch && hasCompass) {
    console.log("But your compass reveals a hidden path. You survive!");
  } else {
    console.log("You get lost forever.");
  }
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const hasSword = true;
  const shop = readline.question("Go to 'tavern' or 'smith'? ");
  if (shop === "smith" && hasSword) {
    console.log("The smith upgrades your sword. You become a hero!");
  } else if (shop === "tavern" || !hasMap) {
    console.log("You drink and learn nothing.");
  } else {
    console.log("You wander off.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
  const hasCompass = false;
  if (!hasTorch && !hasCompass && !hasMap) {
    console.log("With no items, you never find your way back. Game over.");
  }
}