//variabelen
let name = prompt("Hallo, wat is je naam?");
alert(`Welkom ${name}! We gaan bijna beginnen`);

let rangeNumberInt = prompt(
  "In welke range wil je een nummer gokken? Tussen 0 - ... ?"
);
let rangeNumber = Number.parseInt(rangeNumberInt);
alert(`Je hebt gekozen een nummer te gokken tussen 0 en ${rangeNumber}`);

let pickedNumberInt = prompt(
  `Raad welk nummer ik in mijn hoofd heb. Kies nu een nummer tussen 0 en ${rangeNumber}`
);
let pickedNumber = Number.parseInt(pickedNumberInt);
alert(
  `Je hebt nummer ${pickedNumber} gekozen. Laten we kijken of je gelijk hebt`
);

let randomNum = Math.floor(Math.random() * rangeNumber);
console.log(randomNum);

//functies

function checkNumber() {
  if (pickedNumber == randomNum) {
    alert(
      `Je hebt gewonnen! Jouw gekozen nummer: ${pickedNumber}. Computer: ${randomNum}`
    );
  } else {
    alert(
      `Helaas, nummer ${pickedNumber} is niet goed. Je hebt nog 4 kansen. `
    );
    pickedNumber = prompt("Gok nog een keer:");
  }
  if (pickedNumber == randomNum) {
    return alert(
      `Je hebt gewonnen! Jouw gekozen nummer: ${pickedNumber}. Computer: ${randomNum}`
    );
  } else {
    alert(
      `Helaas, nummer ${pickedNumber} is niet goed. Je hebt nog 3 kansen. `
    );
    pickedNumber = prompt("Gok nog een keer:");
  }
  if (pickedNumber == randomNum) {
    alert(
      `Je hebt gewonnen! Jouw gekozen nummer: ${pickedNumber}. Computer: ${randomNum}`
    );
  } else {
    alert(`Helaas, nummer ${pickedNumber} is niet goed. Je hebt nog 2 kansen.`);
    pickedNumber = prompt("Gok nog een keer:");
  }
  if (pickedNumber == randomNum) {
    alert(
      `Je hebt gewonnen! Jouw gekozen nummer: ${pickedNumber}. Computer: ${randomNum}`
    );
  } else {
    alert(
      `Helaas, nummer ${pickedNumber} is niet goed. Je hebt nog 1 kansen. `
    );
    pickedNumber = prompt("Gok nog een keer:");
  }
  if (pickedNumber == randomNum) {
    alert(
      `Je hebt gewonnen! Jouw gekozen nummer: ${pickedNumber}. Computer: ${randomNum}`
    );
  } else {
    alert(
      `Helaas, nummer ${pickedNumber} is niet goed. Het spel is afgelopen! Het goede nummer was ${randomNum}`
    );
  }
}

checkNumber();

alert(`Bedankt voor het meespelen. Druk op "ok" of enter om verder te gaan`);
