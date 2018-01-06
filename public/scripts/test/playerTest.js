const assert = require('chai').assert;

let Player = require('../src/player.js');
let Card = require('../src/card.js');

describe('Player', () => {

  describe('#hasCardOfColor', () => {

    it('should return true if the player has same color', () => {
      let player = new Player();
      player.hand.push(new Card('blue', 5));
      player.hand.push(new Card('red', 9));
      assert.isTrue(player.hasCardOfColor('blue'));
    });
    it('should return false if the player has not same color', () => {
      let player = new Player();
      player.hand.push(new Card('blue', 5));
      player.hand.push(new Card('red', 9));
      assert.isNotTrue(player.hasCardOfColor('green'));
    });
  });

  describe('#hasCardOfRank', () => {

    it('should return true if the player has same rank', () => {
      let player = new Player();
      player.hand.push(new Card('blue', 5));
      player.hand.push(new Card('red', 'skip', 'skip', 20));
      assert.isTrue(player.hasCardOfRank(5));
      assert.isTrue(player.hasCardOfRank('skip'));
    });
    it('should return false if the player has not same rank', () => {
      let player = new Player();
      player.hand.push(new Card('blue', 5));
      player.hand.push(new Card('red', 9));
      assert.isNotTrue(player.hasCardOfRank(1));
    });
  });

  describe('#getMatchingCards', () => {

    it('should return cards with same color or rank as given card', () => {
      let player = new Player();
      let card1 = new Card('blue', 6);
      let card2 = new Card('red', 9);
      let card3 = new Card('green', 'reverse', 'reverse', 20);
      let card4 = new Card('Wild', 'wild', 'wild', 50)
      let card5 = new Card('blue', 9);
      player.addInHand(card1);
      player.addInHand(card2);
      player.addInHand(card3);
      player.addInHand(card4);
      player.addInHand(card5);
      assert.deepEqual(player.getMatchingCards(card5),[card1,card2,card5]);
      assert.deepEqual(player.getMatchingCards(card3),[card3]);
    });
  });

  describe('#getWildCards', () => {

    it('should return all wild cards', () => {
      let player = new Player();
      let card1 = new Card('blue', 6);
      let card2 = new Card('Wild', 'wild', 'wild', 50);
      let card3 = new Card('Wild', 'wildFour', 'wildFour', 50);
      let card4 = new Card('Wild', 'wildFour', 'wildFour', 50);
      let card5 = new Card('blue', 9);
      player.addInHand(card1);
      player.addInHand(card2);
      player.addInHand(card3);
      player.addInHand(card4);
      player.addInHand(card5);
      assert.deepEqual(player.getWildCards(),[card2,card3,card4]);
    });
  });
});
