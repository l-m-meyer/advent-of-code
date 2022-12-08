import { readFile } from 'node:fs/promises';


const getGameStrategies = async () => {
  // read the input file containing the strategy guide
  const input = await readFile('input.txt', { encoding: 'utf-8' });

  // split input to return an array of arrays of game strategies
  const gameStrategies =
    input
      .split(/\r\n/gm)
      .map(game => game.split(' '));

  playGameStrategies(gameStrategies);
}

const playGameStrategies = (gameStrategies) => {

}