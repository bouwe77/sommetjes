// /**
//  * Generates a multiplication table for the given number.
//  * @param {number} number Which multiplication table.
//  * @param {number} until the max number the multiply the number with.
//  * @param {number} howMany How many sums.
//  * @returns A string array of sums.
//  */
// function getMultiplicationTable(number, until, howMany = 10) {
//   const table = [];

//   if (until < 1 || howMany < 1) return table;

//   for (let index = 1; index <= until; index++) {
//     let number1 = index;
//     let number2 = number;

//     const question1 = {
//       question: `${number1} x ${number2}`,
//       answer: String(number1 * number2),
//     };
//     table.push(question1);

//     const question2 = {
//       question: `${number2} x ${number1}`,
//       answer: String(number1 * number2),
//     };
//     table.push(question2);
//   }

//   const selected = table.slice(0, howMany + 1);

//   return selected;
// }

// /**
//  * Generates addition sums.
//  * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
//  *   getAdditionSums(1, 10, 8, 5)
//  * @param {number} from The smallest allowed value.
//  * @param {number} until The largest value allowed value.
//  * @param {number} howMany How many sums.
//  * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
//  * @returns A string array of sums.
//  */
// function getAdditionSums(from, until, howMany, requiredMin) {
//   if (!requiredMin) requiredMin = from;

//   const sums = [];

//   if (from >= until || howMany < 1) return sums;

//   while (sums.length !== howMany) {
//     const random1 = getRandomNumber(from, until);
//     const random2 = getRandomNumber(from, until);

//     if (
//       random1 + random2 <= until &&
//       (random1 >= requiredMin || random2 >= requiredMin)
//     ) {
//       const question = {
//         question: `${random1} + ${random2}`,
//         answer: String(random1 + random2),
//       };
//       sums.push(question);
//     }
//   }

//   return sums;
// }

// /**
//  * Generates subtraction sums.
//  * Example: 8 sums with numbers between 1 and 10, where at least one of the numbers in the sum must be 5:
//  *   getSubtractionSums(1, 10, 8, 5)
//  * @param {number} from The smallest allowed value.
//  * @param {number} until The largest value allowed value.
//  * @param {number} howMany How many sums.
//  * @param {number} requiredMin (optional) At least one of the two numbers in the sum must be larger than this number.
//  * @returns A string array of sums.
//  */
// function getSubtractionSums(from, until, howMany, requiredMin) {
//   if (!requiredMin) requiredMin = from;
//   const sums = [];

//   while (sums.length !== howMany) {
//     const random1 = getRandomNumber(from, until);
//     const random2 = getRandomNumber(from, until);

//     const result = random1 - random2;
//     if (
//       result >= 0 &&
//       result <= until &&
//       (random1 >= requiredMin || random2 >= requiredMin)
//     ) {
//       const question = {
//         question: `${random1} - ${random2}`,
//         answer: String(random1 - random2),
//       };
//       sums.push(question);
//     }
//   }

//   return sums;
// }

// function getAdditionAndSubtractionSums(from, until, howMany, requiredMin) {
//   const howManyAdditions = Math.ceil(howMany / 2);
//   const howManySubtractions = howMany - howManyAdditions;

//   const additions = getAdditionSums(from, until, howManyAdditions, requiredMin);
//   const subtractions = getSubtractionSums(
//     from,
//     until,
//     howManySubtractions,
//     requiredMin
//   );

//   const additionsAndSubtractions = [...additions, ...subtractions];

//   return shuffleArray(additionsAndSubtractions);
// }

// /**
//  * Generates a random number between the given min and max.
//  * In contrast to Math.random this function does an inclusive min and max.
//  * @param {number} min The smallest allowed value.
//  * @param {number} max The largest allowed value.
//  */
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // module.exports = {
// //   getMultiplicationTable,
// //   getAdditionSums,
// //   getSubtractionSums,
// //   getAdditionAndSubtractionSums,
// // };

// module.exports = {
//   getMultiplicationTable,
//   getAdditionSums,
//   getSubtractionSums,
//   getAdditionAndSubtractionSums,
// };
