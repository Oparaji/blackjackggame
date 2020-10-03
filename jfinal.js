
'use strict';
	// 
	//Blackjack Game
	//By Anthony Oparaji
	//
	
// Card Variable
let suit = ["Club", "Hearts","Diamonds", "Spades"];
let valu = ["Ace","King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];
	
	
// DOM Variables
let textArea 	= document.getElementById("textArea"),
	newGameBtn	= document.getElementById("newGame"),
	hitBtn 		= document.getElementById("hit"),
	stayBtn 	= document.getElementById("stay");
	
// Game Variable
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];
	

hitBtn.style.display = "none";
stayBtn.style.display = "none";
showStatus();


newGameBtn.addEventListener("click", 

	function(){
		gameStarted = true;
		gameOver = false;
		playerWon = false;
		
		deck = createDeck();
		shuffleDeck(deck);
		playerCards = [getNextCard(), getNextCard()];
		dealerCards = [getNextCard(), getNextCard()];
		
		hitBtn.style.display = "inline";
	    stayBtn.style.display = "inline";
		newGameBtn.style.display = "none";
		showStatus();
	
	}
	);
	
function createDeck(){
		let deck = []; 
		for (let suitIdx = 0; suitIdx < suit.length; suitIdx++){
			for (let valueIdx = 0; valueIdx < valu.length; valueIdx++){
			let card = {
			suit: suit[suitIdx],
			valu: valu[valueIdx]
			};
			
			deck.push(card);
			}
		//console.log(deck);
		}
		return deck;
	}
	
function shuffleDeck(deck) {
		for (let i = 0; i < deck.length; i++) {
			let swapIdx = Math.trunc(Math.random() * deck.length);
			console.log(swapIdx);
			let tmp = deck[swapIdx];
			deck[swapIdx] = deck[i];
			deck[i] = tmp;
		}
		return deck;
	}
	
function getCardString(card){
		return card.valu + " of " + card.suit;
	}
	
function getNextCard() {
	return deck.shift();
}

function showStatus() {
		if (!gameStarted) {
			textArea.innerText = "Welcome to Prince's Tony Blackjack!";
		return;
		}
		for (let i =0; i<deck.length; i++) {
		textArea.innerText += '\n' + getCardString(deck[i]);
		
		}

	}	
    
	
	
function getNextCard(){
		return deck.shift();
	}
	
