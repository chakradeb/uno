const assert = require('chai').assert;

let Player = require('../src/player.js');
let Card = require('../src/card.js');

describe('Player', () => {

  describe('#hasCardOfColor', () => {

    it('should return true if the player has same color', () => {
      let player = new Player();
      player.hand.push(new Card('blue', '5'));
      player.hand.push(new Card('red', '9'));
      assert.isTrue(player.hasCardOfColor('blue'));
    });
    it('should return false if the player has not same color', () => {
      let player = new Player();
      player.hand.push(new Card('blue', '5'));
      player.hand.push(new Card('red', '9'));
      assert.isNotTrue(player.hasCardOfColor('green'));
    });
  });

  describe('#hasCardOfNumber', () => {

    it('should return true if the player has same number', () => {
      let player = new Player();
      player.hand.push(new Card('blue', '5'));
      player.hand.push(new Card('red', '9'));
      assert.isTrue(player.hasCardOfNumber('5'));
    });
    it('should return false if the player has not same number', () => {
      let player = new Player();
      player.hand.push(new Card('blue', '5'));
      player.hand.push(new Card('red', '9'));
      assert.isNotTrue(player.hasCardOfNumber('1'));
    });
  });
});
