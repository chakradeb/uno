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
  while(!game.isOver()){
    let player = game.determineTurn();
    let card = player.throwCard();
    game.addCardToTable(card);
  }
  console.log('thrown cards ==>',game.getTable());
  console.log('remaining cards ==>',game.getDeck());
}

loadGame();
