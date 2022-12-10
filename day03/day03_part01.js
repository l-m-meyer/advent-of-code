// part 1
import { readFile } from 'node:fs/promises';


const getAllRucksacks = async () => {
  // read the input file containing each rucksack
  const input = await readFile('input.txt', { encoding: 'utf-8' });

  // split input to return an array of arrays of rucksack items
  const rucksacks =
    input
      .split(/\r\n/gm);

  const priorities = returnPriorities();
  getRucksackItems(rucksacks, priorities);
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

const getRucksackItems = (rucksacks, priorities) => {
  let sum = 0;

  for (const rucksack of rucksacks) {
    const half = rucksack.length / 2;
    const left = rucksack.slice(0, half).split('');
    const right = rucksack.slice(half).split('');

    // check if item in left compartment is also in right compartment
    // add priority of the item to sum, then break out of loop
    for (const item of left) {
      if (right.includes(item)) {
        sum += priorities[item];
        break;
      }
    }
  }
  console.log('SUM of priorities:', sum);
}

getAllRucksacks();