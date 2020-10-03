	let suit = ["Club", "Hearts", "Diamonds", "Spades"];
	let value = ["Ace","King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];	
	
	let deck = []; 
	for (let suitIdx = 0; suitIdx<suit.length; suitIdx++){
		for (let valueIdx = 0; valueIdx<value.length; valueIdx++){
		deck.push( value[valueIdx] + " of " + suit[suitIdx]);
		
		}	
	}
	for (let i = 0; i<deck.length; i++){
		//console.log(deck[i]);
		document.getElementById("demo3").innerHTML +=  deck[i] + "  and    " ;
	}
	let playerCards = [deck[0], deck[2]]; 

document.getElementById("demo").innerHTML = "  " + playerCards[0];
document.getElementById("demo1").innerHTML = "  " + playerCards[1];

console.log("Welcome to Blackjack");
console.log("You are dealt:");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);
