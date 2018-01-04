let Deck = require('./deck.js');
let Table = require('./table.js');

let Game = function(){
  this.players = [];
  this.deck = {};
  this.table = {};
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

Game.prototype.addTable = function(){
  let table = new Table();
  this.table = table;
}

Game.prototype.addCardToTable = function(card){
  this.table.add(card);
}

Game.prototype.getTable = function(){
  return this.table;
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
  let currentTurn = this.currentTurn % this.players.length;
  this.currentTurn++;
  return this.players[currentTurn];
}

Game.prototype.isOver = function(){
  return this.players.some(function(player){
    return player.numberOfCards() == 0;
  });
}

module.exports = Game;
