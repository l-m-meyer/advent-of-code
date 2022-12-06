import { readFile } from 'node:fs/promises';

const returnAllElvesCalories = async () => {
  // read the input file containing total calories carried by all elves
  const input = await readFile('input.txt', { encoding: 'utf-8' });

  // split input to return an array and map each item to convert from String to Integer
  const getAllElvesCalories =
    input
      .split(/\r\n|\r|\n/gm)
      .map(e => parseInt(e));

  return returnTotalCaloriesPerElf(getAllElvesCalories);
}

const returnTotalCaloriesPerElf = (getAllElvesCalories) => {
  const totalCaloriesPerElf = [];

  const caloriesInElfBag = [];
  for (const elf of getAllElvesCalories) {
    if (!isNaN(elf)) {
      caloriesInElfBag.push(elf);
    }
    if (isNaN(elf)) {
      totalCaloriesPerElf.push(caloriesInElfBag.reduce((a, b) => a + b, 0));
      caloriesInElfBag.length = 0;
    }
  }

  return printElfWithMostCalories(totalCaloriesPerElf);
}

const printElfWithMostCalories = (totalCaloriesPerElf) => {
  const getElfWithMostCalories = Math.max(...totalCaloriesPerElf);
  console.log('Elf with most calories:', getElfWithMostCalories);
}

returnAllElvesCalories();