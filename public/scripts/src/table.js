let Table = function() {
  this.thrownCards = [];
}

Table.prototype.getFirstCard = function(){
  return this.thrownCards[0];
}

Table.prototype.add = function(card){
  this.thrownCards.unshift(card);
}

module.exports = Table;
