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
  // keep score record
  const points = {
    you: 0,
    opponent: 0
  };

  // points awarded to each shape
  const shapePoints = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  // points awarded for win, lose, draw
  const outcomePoints = {
    win: 6,
    lose: 0,
    draw: 3,
  };

  for (const game of gameStrategies) {
    switch (game[0]) {
      case 'A':
        points.opponent += shapePoints.rock;
        if (game[1] === 'X') {
          points.opponent += outcomePoints.draw;
          points.you += outcomePoints.draw + shapePoints.rock;
        }
        if (game[1] === 'Y') {
          points.opponent += outcomePoints.lose;
          points.you += outcomePoints.win + shapePoints.paper;
        }
        if (game[1] === 'Z') {
          points.opponent += outcomePoints.win;
          points.you += outcomePoints.lose + shapePoints.scissors;
        }
        break;
      case 'B':
        points.opponent += shapePoints.paper;
        if (game[1] === 'X') {
          points.opponent += outcomePoints.win;
          points.you += outcomePoints.lose + shapePoints.rock;
        }
        if (game[1] === 'Y') {
          points.opponent += outcomePoints.draw;
          points.you += outcomePoints.draw + shapePoints.paper;
        }
        if (game[1] === 'Z') {
          points.opponent += outcomePoints.lose;
          points.you += outcomePoints.win + shapePoints.scissors;
        }
        break;
      case 'C':
        points.opponent += shapePoints.paper;
        if (game[1] === 'X') {
          points.opponent += outcomePoints.lose;
          points.you += outcomePoints.win + shapePoints.rock;
        }
        if (game[1] === 'Y') {
          points.opponent += outcomePoints.win;
          points.you += outcomePoints.lose + shapePoints.paper;
        }
        if (game[1] === 'Z') {
          points.opponent += outcomePoints.draw;
          points.you += outcomePoints.draw + shapePoints.scissors;
        }
        break;
    }
  }
  // print final scores
  console.log('FINAL SCORES:', points);
}

getGameStrategies();