import additionsUnder10 from "./additions_under_10";
import subtractionsUnder10 from "./subtractions_under_10";
import tables from "./tables";
import additionsBetween10And20 from "./additions_between_10_20";
import divisions from "./divisions";
import storySums from "./storySums";

export const exerciseTypes = [
  //"Verhaaltjes",
  "Optellen",
  "Aftrekken",
  "Optellen en aftrekken",
  "Tafels",
  "Delen",
];

const exercises = [
  {
    id: "888",
    name: "Test",
    type: "Verhaaltjes",
    fetch: async () => await getStorySums(),
  },
  {
    id: "1",
    name: "t/m 10",
    type: "Optellen",
    fetch: async () => await getAdditionsUnder10(),
  },
  {
    id: "1a",
    name: "10 t/m 20",
    type: "Optellen",
    fetch: async () => await getAdditionsBetween10And20(),
  },
  {
    id: "2",
    name: "t/m 10",
    type: "Aftrekken",
    fetch: async () => await getSubtractionsUnder10(),
  },
  {
    id: "2a",
    name: "t/m 10",
    type: "Optellen en aftrekken",
    fetch: async () => {
      const additions = await getAdditionsUnder10();
      const subtractions = await getSubtractionsUnder10();
      return [...additions, ...subtractions];
    },
  },
  { id: "3", name: "1", type: "Tafels", fetch: async () => await getTables(1) },
  { id: "4", name: "2", type: "Tafels", fetch: async () => await getTables(2) },
  { id: "5", name: "3", type: "Tafels", fetch: async () => await getTables(3) },
  { id: "6", name: "4", type: "Tafels", fetch: async () => await getTables(4) },
  { id: "7", name: "5", type: "Tafels", fetch: async () => await getTables(5) },
  { id: "8", name: "6", type: "Tafels", fetch: async () => await getTables(6) },
  { id: "9", name: "7", type: "Tafels", fetch: async () => await getTables(7) },
  {
    id: "10",
    name: "8",
    type: "Tafels",
    fetch: async () => await getTables(8),
  },
  {
    id: "11",
    name: "9",
    type: "Tafels",
    fetch: async () => await getTables(9),
  },
  {
    id: "12",
    name: "10",
    type: "Tafels",
    fetch: async () => await getTables(10),
  },
  {
    id: "13",
    name: "11",
    type: "Tafels",
    fetch: async () => await getTables(11),
  },
  {
    id: "14",
    name: "12",
    type: "Tafels",
    fetch: async () => await getTables(12),
  },
  {
    id: "15",
    name: "1 t/m 12",
    type: "Tafels",
    fetch: async () => await getAllTables(),
  },
  {
    id: "16",
    name: "1 t/m 12",
    type: "Delen",
    fetch: async () => await getAllDivisions(),
  },
];

export const getExercises = function () {
  return new Promise((resolve, _) => {
    resolve(exercises);
  });
};

export const getQuestions = async function (exerciseId, howMany) {
  const exercise = exercises.find((x) => x.id === exerciseId);

  const questions = await exercise.fetch();

  let selectedQuestions = [];

  if (howMany <= questions.length) {
    const shuffledQuestions = shuffleArray(questions);
    selectedQuestions = shuffledQuestions.slice(0, howMany);
  } else {
    let howManyLeft = howMany;
    while (howManyLeft > 0) {
      const shuffledQuestions = shuffleArray(questions);
      selectedQuestions = selectedQuestions.concat(
        shuffledQuestions.slice(0, howManyLeft)
      );
      howManyLeft = howMany - selectedQuestions.length;
      console.log(howManyLeft);
    }
  }

  console.log(selectedQuestions);

  return new Promise((resolve, _) => {
    resolve(selectedQuestions);
  });
};

function getStorySums() {
  return new Promise((resolve, _) => {
    resolve(storySums);
  });
}

function getAdditionsUnder10() {
  return new Promise((resolve, _) => {
    resolve(additionsUnder10);
  });
}

function getAdditionsBetween10And20() {
  return new Promise((resolve, _) => {
    resolve(additionsBetween10And20);
  });
}

function getSubtractionsUnder10() {
  return new Promise((resolve, _) => {
    resolve(subtractionsUnder10);
  });
}

function getTables(number) {
  return new Promise((resolve, _) => {
    resolve(tables[number]);
  });
}

function getAllTables() {
  return new Promise((resolve, _) => {
    let allTables = [];
    for (let number = 1; number <= 12; number++) {
      allTables = allTables.concat(tables[number]);
    }
    resolve(allTables);
  });
}

function getAllDivisions() {
  return new Promise((resolve, _) => {
    resolve(divisions);
  });
}

/**
 * Shuffles the array and returns a new one.
 * @param {array} array The array to shuffle.
 * @returns A shuffled array.
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
