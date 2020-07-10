import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from '../Game/game.js';
const game = new Game();
game.start();

// Если открыть файл test.html в консоли увидим 'game started'
