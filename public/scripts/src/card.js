let Card = function(color,number,action,value){
  this.color = color;
  this.number = number;
  this.action = action;
  this.value = value;
}

Card.prototype.getColor = function(){
  return this.color;
}
Card.prototype.getNumber = function(){
  return this.number;
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
