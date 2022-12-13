var name = prompt('What is your name?');  // executed as program loads

function sayHello () {
    alert('Hello ' + name + '!');
}

function sayGoodbye () {
    alert('Goodbye ' + name + '!');
}

function sayBoth () {
    sayHello();                            // this is a function call
    sayGoodbye();                          // this is a function call
}

function randomlySayHelloOrGoodbye () {
	var zeroOrOne = Math.floor(Math.random() * 2);
	if (zeroOrOne == 0) {
		sayHello();
	}
	else {
		sayGoodbye();
	}
}