// part 2
import { readFile } from 'node:fs/promises';

const getAllRucksacks = async () => {
  // read the input file containing each rucksack
  const input = await readFile('input.txt', { encoding: 'utf-8' });

  // split input to return an array of arrays of rucksack items
  const rucksacks =
    input
      .split(/\r\n/gm);

  const priorities = returnPriorities();
  getElfGroupBadges(rucksacks, priorities);
}

// convert each item type to a priority
// lowercase items 'a' to 'z' have priorities 1-26
// uppercase items 'A' to 'Z' have priorities 27-52
const returnPriorities = () => {
  const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const priorities = {};

  for (let i = 0; i < items.length; i++) {
    priorities[items[i]] = i + 1;
  }

  return priorities;
}

const getElfGroupBadges = (rucksacks, priorities) => {
  let sum = 0;

  const elfGroup = [];

  for (const elf of rucksacks) {
    elfGroup.push(elf);
    if (elfGroup.length === 3) {
      for (const item of elfGroup[0].split('')) {
        if (elfGroup[1].includes(item) && elfGroup[2].includes(item)) {
          sum += priorities[item];
          break;
        }
      };
      elfGroup.length = 0;
    }
  } console.log('SUM of priorities:', sum);
}

getAllRucksacks();