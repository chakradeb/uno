const chai = require('chai').assert;
const assert = require('assert');
const fs = require('fs');

let Deck = require('../src/deck.js');

let unoCards = JSON.parse(fs.readFileSync('./data/unoCards.json','utf8'));

describe('Deck', () => {

  describe('#loadCards', ()=> {

    it('should load all the unoCards in deck', () => {
      let deck = new Deck();
      deck.loadCards();
      assert.deepEqual(deck.undistributedCards,unoCards.deck);
    });
  });

  describe('#shuffle', () => {

    it('should shuffle all the cards in deck', () => {
      let deck = new Deck();
      deck.loadCards();
      let cardsBeforeShuffle = deck.getCards();
      deck.shuffle();
      let cardsAfterShuffle = deck.getCards();
      chai.notDeepEqual(cardsBeforeShuffle,cardsAfterShuffle);
    });
  });

  describe('#drawFirstCard', () => {

    it('should return the top most card from the deck', () => {
      let deck = new Deck();
      deck.loadCards();
      deck.shuffle();
      let firstCard = deck.getCards()[0];
      chai.equal(deck.drawFirstCard(),firstCard);
    });
  });
});
