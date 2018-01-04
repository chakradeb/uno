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

Player.prototype.hasCardOfNumber = function(value) {
  return this.hand.some(function(card) {
    return card.getNumber() == value;
  });
}

Player.prototype.throwCard = function(card) {
  return this.hand.shift();
}

module.exports = Player;
