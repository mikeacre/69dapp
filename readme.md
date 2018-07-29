#Acey-Duecy Simulator Dapp

##Acey-Duecy Card game
In the standard game two cards are draw, then a wager is placed that the next card will be in between those two.

##As a Dapp

This dApp will allow a user to play a game of Acey-Duecy with the contract.

First the user will pay the fee of .01 eth to create a unique card, with a randomly assigned value as well as a probability that it will be used as the high card or the low card.

Once the user has generated the card, they can submit a wager of up to 1 eth and start a new game.

When the game starts the contract will determine whether the card will be played as the low or the high, and also determine the value of the other two cards deemed middle and last.

If the players card is decided to be low it will be evaluated as a victory if playersCard < middleCard < LastCard

If players card is decided to be high it will be evaluated as a victory if lastCard < middleCard < playersCard

If it is a loss, the wager is lost. If it is a win, 1.5* the wager is returned less the gameCost.
