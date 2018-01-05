const fs = require('fs');

let shuffle = require('./utility.js').shuffle;
let Card = require('./card.js');

let allCards = JSON.parse(fs.readFileSync('./data/unoCards.json','utf8'));

let Deck = function(){
  this.undistributedCards = [];
}

Deck.prototype.getCards = function(){
  return this.undistributedCards;
}

Deck.prototype.loadCards = function(){
  allCards.deck.forEach((card) => {
    let color = card.color;
    let rank = card.rank;
    let action = card.action;
    let value = card.value;
    let unoCard = new Card(color,rank,action,value);
    this.undistributedCards.push(unoCard);
  });
}

Deck.prototype.shuffle = function(){
  this.undistributedCards = shuffle(this.undistributedCards);
}

Deck.prototype.drawFirstCard = function(){
  let cardInFirst = this.undistributedCards.shift();
  return cardInFirst;
}

module.exports = Deck;
