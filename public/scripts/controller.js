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
  game.distributeCards(numberOfRounds);
  console.log('Remaining Deck ==>',game.getDeck());
  console.log('Remaining Deck Size ==>',game.getDeck().undistributedCards.length);
  console.log('Player 1 ==>',game.players[0].showHand());
  console.log('Player 2 ==>',game.players[1].showHand());
  console.log('Player 3 ==>',game.players[2].showHand());
  console.log('Player 4 ==>',game.players[3].showHand());
}

loadGame();
