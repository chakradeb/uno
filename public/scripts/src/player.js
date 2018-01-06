let removeCard = require('./utility.js').pop;

let Player = function(name) {
  this.name = name;
  this.hand = [];
}

Player.prototype.addInHand = function(card){
  this.hand.push(card);
}

Player.prototype.showHand = function(){
  return this.hand;
}

Player.prototype.numberOfCards = function(){
  return this.hand.length;
}

Player.prototype.getName = function(){
  return this.name;
}

Player.prototype.hasCardOfColor = function(color) {
  return this.hand.some(function(card) {
    return card.getColor() == color;
  });
}

Player.prototype.hasCardOfRank = function(value) {
  return this.hand.some(function(card) {
    return card.getRank() == value;
  });
}

Player.prototype.getMatchingCards = function(tableCard){
  let color = tableCard.getColor();
  let rank = tableCard.getRank();
  return this.hand.filter(function(playerCard){
    return (playerCard.getColor()==color || playerCard.getRank()==rank);
  });
}

Player.prototype.getWildCards = function(){
  return this.hand.filter(function(playerCard){
    return playerCard.getColor()=='Wild';
  });
}

Player.prototype.throwMatchingCard = function(tableCard) {
  let matchingCards = this.getMatchingCards(tableCard);
  if(matchingCards.length == 0) matchingCards = this.getWildCards();
  removeCard(matchingCards[0],this.hand);
  return matchingCards[0];
}

module.exports = Player;
