const MIN = 1, MAX = 20;

function main()

{
	var randomNumber1, randomNumber2, guess1, guess2;
	randomNumber1 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	randomNumber2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	guess1 = Number(prompt("Guess the first number between " + String(MIN) + " and " + String(MAX) + ":"));
	guess2 = Number(prompt("Guess the second number between " + String(MIN) + " and " + String(MAX) + ":"));
	
	if (guess1 == randomNumber1 && guess2 == randomNumber2) {
			alert("Both guesses correct - you've won \243 1,000!");
		}
	if (guess2 == randomNumber2 || guess1 == randomNumber1) {
		alert("One guess correct - you've won \243 10!"); 
		}
	else {
		alert("Better luck next time!");
	}
	
}