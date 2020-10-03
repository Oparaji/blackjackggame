 
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
	stayBtn 	= document.getElementById("stay"),
	subHd 		= document.getElementById("subheader");	
	
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
	
hitBtn.addEventListener("click", 
		function(){
		playerCards.push(getNextCard());
		checkForEndOfGame();
		showStatus();
		}
	);
stayBtn.addEventListener("click", 
		function(){	
		gameOver = true;
		checkForEndOfGame();
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

function checkForEndOfGame(){
	//todo;
}
function showStatus() {
		if (!gameStarted) {
			textArea.innerText = "Welcome to Prince's Tony Blackjack!";
			subHd.innerText = " ";
			newGameBtn.style.display = "inline";
			hitBtn.style.display = "none";
			stayBtn.style.display = "none";
			
		return;
		}
		let dealerCardString = ""
		for (let i =0; i<dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i])+ '\n';
		
		}
		let playerCardString = ""
		for (let i =0; i<playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i])+ '\n';
		
		}
		updateScore();
		textArea.innerText = 
		"Dealer has: \n" + 
		dealerCardString +
		"(score: " + dealerScore + ")\n\n"  +
		
		"Player has: \n" + 
		playerCardString +
		"(score: " + playerScore + ")\n\n" ;
		
		if (gameOver) {
			if (playerWon) {
			textArea.innerText += "You Win!";
			}
			else {
			textArea.innerText += "Dealer Wins!";
			}
			newGameBtn.style.display = "inline";
			hitBtn.style.display = "none";
			stayBtn.style.display = "none";
			
		}
	}
function getCardNumericValue(card){
		switch(card.value){
		case "Ace":
		return 1;
		case "Two":
		return 2;
		case "Three":
		return 3;
		case "Four":
		return 4;
		case "Five":
		return 5;
		case "Six":
		return 6;
		case "Seven":
		return 7;
		case "Eight":
		return 8;
		case "Nine":
		return 9;
		default:
		return 10;
		}
}

function getScore(cardArray){
		let score = 0
		let hasAce = false
		for (let i =0; i<cardArray.length; i++) {
			let card = cardArray[i];
			score += getCardNumericValue(card);
				if (card.value === "Ace") {
				hasAce = true;
				}
		}
		if (hasAce && score + 10 <= 21) {
			return score + 10;
			}
		return score;
		
		
	}	
    
function updateScore(){
		dealerScore = getScore(dealerCards);
		playerScore = getScore(playerCards);
	}

function getNextCard(){
		return deck.shift();
	}
	
