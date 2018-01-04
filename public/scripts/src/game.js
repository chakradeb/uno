let Deck = require('./deck.js');

let Game = function(){
  this.players = [];
  this.deck = {};
  this.playingDirection = [];
  this.currentTurn = 0;
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
  this.playingDirection.push(player);
}

Game.prototype.getNumberOfPlayer = function(player){
  return this.players.length;
}

Game.prototype.addDeck = function(){
  let deck = new Deck();
  deck.loadCards();
  deck.shuffle();
  this.deck = deck;
}

Game.prototype.getDeck = function(){
  return this.deck;
}

Game.prototype.distributeCards = function(numberOfRounds){
  let round = 0;
  while(round<numberOfRounds){
    let player = 0;
    while(player<this.players.length){
      let card = this.deck.drawFirstCard();
      this.players[player].addInHand(card);
      player++;
    }
    round++;
  }
}

Game.prototype.determineTurn = function(){
  let currentTurn = this.currentTurn;
  this.turn = this.players.length - currentTurn;
  return this.players[currentTurn];
}

module.exports = Game;
