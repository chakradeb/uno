const assert = require('chai').assert;

let Game = require('../src/game.js');
let Player = require('../src/player.js');

describe('Game', () => {

  describe('#addPlayer', () => {

    it('should add players in the Game', () => {
      let game = new Game();
      game.addPlayer('player1');
      game.addPlayer('player2');
      assert.equal(game.getNumberOfPlayer(),2);
    });
  });

  describe('#addDeck', () => {

    it('should add deck in the Game', () => {
      let game = new Game();
      assert.deepEqual(game.getDeck(),{})
      game.addDeck();
      assert.notDeepEqual(game.getDeck(),{});
    });
  });

  describe('#distributeCards', () => {

    it('should distribute cards among all players', () => {
      let game = new Game();
      game.addPlayer(new Player('Debarun'));
      game.addPlayer(new Player('Bhanu'));
      game.addDeck();
      let deckString = JSON.stringify(game.getDeck());
      let deck = JSON.parse(deckString);
      game.distributeCards();
      assert.notDeepEqual(game.getDeck(),deck);
      assert.notDeepEqual(game.players[0].showHand,[]);
      assert.notDeepEqual(game.players[1].showHand,[]);
    });
  });

  describe('#determineTurn', () => {

    it('should return a player according to the turn', () => {
      let game = new Game();
      let player1 = new Player('Debarun');
      let player2 = new Player('Bhanu');
      game.addPlayer(player1);
      game.addPlayer(player2);
      let currentPlayer = game.determineTurn();
      assert.deepEqual(currentPlayer,player1);
    });
  });
});
