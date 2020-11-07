import {
  getAdditionSums,
  getMultiplicationTable,
  getSubtractionSums,
} from "../calculations";

//TODO Optellen met 2 getallen onder de 10 waarbij het totaal boven die 10 is...`

export const exerciseTypes = ["Optellen", "Aftrekken", "Tafels"];

export const exercises = [
  {
    name: "t/m 10",
    type: "Optellen",
    getQuestions: () => getAdditionSums(1, 10, 20),
  },
  {
    name: "t/m 20",
    type: "Optellen",
    getQuestions: () => getAdditionSums(5, 20, 10, 20),
  },
  {
    name: "t/m 10",
    type: "Aftrekken",
    getQuestions: () => getSubtractionSums(1, 10, 20),
  },
  {
    name: "t/m 20",
    type: "Aftrekken",
    getQuestions: () => getSubtractionSums(5, 20, 10, 20),
  },
  {
    name: "1",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(1, 12, 20),
  },
  {
    name: "2",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(2, 12, 20),
  },
  {
    name: "3",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(3, 12, 20),
  },
  {
    name: "4",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(4, 12, 20),
  },
  {
    name: "5",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(5, 12, 20),
  },
  {
    name: "6",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(6, 12, 20),
  },
  {
    name: "7",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(7, 12, 20),
  },
  {
    name: "8",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(8, 12, 20),
  },
  {
    name: "9",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(9, 12, 20),
  },
  {
    name: "10",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(10, 12, 20),
  },
  {
    name: "11",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(11, 12, 20),
  },
  {
    name: "12",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(12, 12, 20),
  },
  {
    name: "13",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(13, 12, 20),
  },
  {
    name: "14",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(14, 12, 20),
  },
  {
    name: "15",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(15, 12, 20),
  },
  {
    name: "16",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(16, 12, 20),
  },
  {
    name: "17",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(17, 12, 20),
  },
  {
    name: "18",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(18, 12, 20),
  },
  {
    name: "19",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(19, 12, 20),
  },
  {
    name: "20",
    type: "Tafels",
    getQuestions: () => getMultiplicationTable(20, 12, 20),
  },
];
