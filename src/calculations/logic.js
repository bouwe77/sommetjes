/**
 * Generates a multiplication table for the given number.
 * @param {number} number Which multiplication table.
 * @param {number} until the max number the multiply the number with and also how many sums.
 * @returns A string array of sums.
 */
function getMultiplicationTable(number, until) {
  const table = [];
  for (let index = 1; index <= until; index++) {
    let number1 = index;
    let number2 = number;
    if (Math.random() >= 0.5) {
      number1 = number;
      number2 = index;
    }
    table.push(`${number1} x ${number2}`);
  }

  shuffleArray(table);

  return table;
}

/**
 * Generates addition sums.
 * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
 *   getAdditionSum(1, 10, 8, 5)
 * @param {number} from The smallest allowed value.
 * @param {number} until The largest value allowed value.
 * @param {number} howMany How many sums.
 * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
 * @returns A string array of sums.
 */
function getAdditionSum(from, until, howMany, requiredMin) {
  if (!requiredMin) requiredMin = from;
  const sums = [];

  while (sums.length !== howMany) {
    const random1 = getRandomNumber(from, until);
    const random2 = getRandomNumber(from, until);

    if (
      random1 + random2 <= until &&
      (random1 >= requiredMin || random2 >= requiredMin)
    )
      sums.push(`${random1} + ${random2}`);
  }

  return sums;
}

/**
 * Generates subtraction sums.
 * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
 *   getSubtractionSum(1, 10, 8, 5)
 * @param {number} from The smallest allowed value.
 * @param {number} until The largest value allowed value.
 * @param {number} howMany How many sums.
 * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
 * @returns A string array of sums.
 */
function getSubtractionSum(from, until, howMany, requiredMin) {
  if (!requiredMin) requiredMin = from;
  const sums = [];

  while (sums.length !== howMany) {
    const random1 = getRandomNumber(from, until);
    const random2 = getRandomNumber(from, until);

    const result = random1 - random2;
    if (
      result >= 0 &&
      result <= until &&
      (random1 >= requiredMin || random2 >= requiredMin)
    )
      sums.push(`${random1} - ${random2}`);
  }

  return sums;
}

/**
 * Generates a random number between the given min and max.
 * In contrast to Math.random this function does an inclusive min and max.
 * @param {number} min The smallest allowed value.
 * @param {number} max The largest allowed value.
 */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffle the array by modifying it in place.
 * @param {array} array The array to shuffle.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = { getMultiplicationTable, getAdditionSum, getSubtractionSum };
