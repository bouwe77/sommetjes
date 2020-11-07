/**
 * Generates a multiplication table for the given number.
 * @param {number} number Which multiplication table.
 * @param {number} until the max number the multiply the number with.
 * @param {number} howMany How many sums.
 * @returns A string array of sums.
 */
function getMultiplicationTable(number, until, howMany = 10) {
  const table = [];
  while (table.length !== howMany) {
    let number1 = getRandomNumber(1, until);
    let number2 = number;
    if (Math.random() >= 0.5) {
      let temp = number1;
      number1 = number2;
      number2 = temp;
    }

    const question = {
      question: `${number1} x ${number2}`,
      answer: String(number1 * number2),
    };

    const found = table.some((q) => q.question === question.question);
    if (!found) table.push(question);
  }

  return table;
}

/**
 * Generates addition sums.
 * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
 *   getAdditionSums(1, 10, 8, 5)
 * @param {number} from The smallest allowed value.
 * @param {number} until The largest value allowed value.
 * @param {number} howMany How many sums.
 * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
 * @returns A string array of sums.
 */
function getAdditionSums(from, until, howMany, requiredMin) {
  if (!requiredMin) requiredMin = from;
  const sums = [];

  while (sums.length !== howMany) {
    const random1 = getRandomNumber(from, until);
    const random2 = getRandomNumber(from, until);

    if (
      random1 + random2 <= until &&
      (random1 >= requiredMin || random2 >= requiredMin)
    ) {
      const question = {
        question: `${random1} + ${random2}`,
        answer: String(random1 + random2),
      };
      sums.push(question);
    }
  }

  return sums;
}

/**
 * Generates subtraction sums.
 * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
 *   getSubtractionSums(1, 10, 8, 5)
 * @param {number} from The smallest allowed value.
 * @param {number} until The largest value allowed value.
 * @param {number} howMany How many sums.
 * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
 * @returns A string array of sums.
 */
function getSubtractionSums(from, until, howMany, requiredMin) {
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
    ) {
      const question = {
        question: `${random1} - ${random2}`,
        answer: String(random1 - random2),
      };
      sums.push(question);
    }
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
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

module.exports = {
  getMultiplicationTable,
  getAdditionSums,
  getSubtractionSums,
};
