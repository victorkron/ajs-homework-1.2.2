import Character from '../Domain/domain.js';
import Some, { someParam as myFunc } from './src/app.js';
class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {

}

function readGameSaving() {

}

function writeGameSaving() {

}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
