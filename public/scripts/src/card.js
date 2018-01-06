let Card = function(color,rank,action,value){
  this.color = color;
  this.rank = rank;
  this.action = action;
  this.value = value;
}

Card.prototype.getColor = function(){
  return this.color;
}
Card.prototype.getRank = function(){
  return this.rank;
}

Card.prototype.changeColor = function(choosenColor){
  this.color = choosenColor;
}
// Card.prototype.isReverse = function(){
//   return this.action == 'reverse';
// }
// Card.prototype.isSkip = function(){
//   return this.action == 'skip';
// }
// Card.prototype.isDrawTwo = function(){
//   return this.action == 'drawTwo';
// }

module.exports = Card;
