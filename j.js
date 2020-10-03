	
	let textArea = document.getElementById("textArea");
	let newGame = document.getElementById("newGame");
	let hitb = document.getElementById("hit");
	let stayb = document.getElementById("stay");
	let suit = ["Club", "Hearts", "Diamonds", "Spades"];
	let value = ["Ace","King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

	hitb.style.display = "none";
	stayb.style.display = "none";
	newGame.addEventListener("click", function(){
		hitb.style.display = "inline";
	    stayb.style.display = "inline";
		newGame.style.display = "none";
		textArea.innerText = " Game Started";
	
	});
	function createDeck(){
		let deck = []; 
		for (let suitIdx = 0; suitIdx < suit.length; suitIdx++){
			for (let valueIdx = 0; valueIdx < value.length; valueIdx++){
			card = {
			suit: suit[suitIdx],
			value: value[valueIdx]
			};
			
			deck.push(card);
			}
		
		}
		return deck;
	}
	
	function getCardString(card){
		return card.value + " of" + card.suit;
	}
	
	function getNextCard(){
		return deck.shift();
	}
	
	deck = createDeck();
		
	for (let i =0; i<deck.length; i++) {
		console.log("No." + (i+1) + " is " + deck[i].suit + " " + deck[i].value);
		document.getElementById("demo2").innerHTML = " " + ("No." + (i+1) + " is " + deck[i]);
	}
	
	let playerCards = [getNextCard(), getNextCard()];
	let Score = 25;
	
	if (score => 25) {
		
	document.getElementById("demo").innerHTML = "  " + getCardString(playerCards[0]);
	}
	else {
	document.getElementById("demo1").innerHTML = "  " + getCardString(playerCards[1]);
	}

	
	console.log("Welcome to Blackjack");
	console.log("You are dealt:");
	
	let score = "TX";
	
	switch (score) {
	case "TS":
	console.log(" " + getCardString(playerCards[0]));
	break;
	default:
	console.log(" " + getCardString(playerCards[1]));
	break;
	}

	for (let i=4; i<=20; ++i) {
	
	console.log("i is " + i);
	}
	
	i=1
	while (i<5) {
	console.log(i + i);
		i++;
	}

   function myfun(message, age){
			let blast = "Welcome " + message + "!" + "  You are " + age + " Years old";
			console.log(blast);
			
	}
	
	myfun("Mary", 22);
	
	function mysquare(x){
		x = x*x;
		return x;
	}
	
	let result = 20 + mysquare(5);
	console.log(result);