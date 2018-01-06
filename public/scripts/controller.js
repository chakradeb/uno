const readline = require('readline-sync');
let Game = require('./src/game.js');
let Player = require('./src/player.js');

let numberOfRounds = 7;

let addPlayer = function(game){
  console.log('Enter Number of Players:');
  let numberOfPlayers = readline.prompt();
  for(let count=0;count<numberOfPlayers;count++){
    console.log(`Enter Player${count+1} Name:`);
    let playerName = readline.prompt();
    let player = new Player(playerName);
    game.addPlayer(player);
  }
}

let loadGame = function(){
  let game = new Game();
  addPlayer(game);
  game.addDeck();
  game.addTable();
  game.distributeCards(numberOfRounds);
  game.addOpeningCard();
  console.log('Opening Card==>',game.getLastPlayedCard());
  while(!game.isOver()){
    let player = game.determineTurn();
    let lastPlayerCard = game.getLastPlayedCard();
    let card = player.throwMatchingCard(lastPlayerCard);
    if(card) console.log(`\n          ${player.getName()} Throwing ==>`,card);
    if(card) game.addCardToTable(card);
    console.log(`\n Player: ${player.getName()}==>`,player.showHand());
  }
  console.log('thrown cards ==>',game.getTable());
}

loadGame();
