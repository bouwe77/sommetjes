import {
  getAdditionSums,
  getMultiplicationTable,
  getSubtractionSums,
} from "../calculations";

//TODO Optellen met 2 getallen onder de 10 waarbij het totaal boven die 10 is...`

export default {
  "Optellen onder de 10": {
    type: "additions",
    getQuestions: () => getAdditionSums(1, 10, 10),
  },
  "Optellen onder de 20": {
    type: "additions",
    getQuestions: () => getAdditionSums(5, 20, 10, 10),
  },
  "Aftrekken onder de 10": {
    type: "subtractions",
    getQuestions: () => getSubtractionSums(1, 10, 10),
  },
  "Aftrekken onder de 20": {
    type: "subtractions",
    getQuestions: () => getSubtractionSums(5, 20, 10, 10),
  },
  "Tafel van 1": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(1, 12, 20),
  },
  "Tafel van 2": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(2, 12, 20),
  },
  "Tafel van 3": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(3, 12, 20),
  },
  "Tafel van 4": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(4, 12, 20),
  },
  "Tafel van 5": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(5, 12, 20),
  },
  "Tafel van 6": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(6, 12, 20),
  },
  "Tafel van 7": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(7, 12, 20),
  },
  "Tafel van 8": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(8, 12, 20),
  },
  "Tafel van 9": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(9, 12, 20),
  },
  "Tafel van 10": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(10, 12, 20),
  },
  "Tafel van 11": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(11, 12, 20),
  },
  "Tafel van 12": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(12, 12, 20),
  },
  "Tafel van 13": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(13, 12, 20),
  },
  "Tafel van 14": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(14, 12, 20),
  },
  "Tafel van 15": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(15, 12, 20),
  },
  "Tafel van 16": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(16, 12, 20),
  },
  "Tafel van 17": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(17, 12, 20),
  },
  "Tafel van 18": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(18, 12, 20),
  },
  "Tafel van 19": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(19, 12, 20),
  },
  "Tafel van 20": {
    type: "multiplications",
    getQuestions: () => getMultiplicationTable(20, 12, 20),
  },
};

/*
export default {	
    "Optellen onder de 10": [	
      { question: "1 + 1", answer: "2" },	
      { question: "1 + 2", answer: "3" },	
      { question: "3 + 2", answer: "5" },	
    ],	
    "Optellen onder de 20": [	
      { question: "7 + 9", answer: "16" },	
      { question: "18 + 1", answer: "19" },	
      { question: "13 + 2", answer: "15" },	
    ],	
    "Aftrekken onder de 10": [	
      { question: "2 - 1", answer: "1" },	
      { question: "9 - 6", answer: "3" },	
      { question: "8 - 3", answer: "5" },	
    ],	
    "Aftrekken onder de 20": [	
      { question: "20 - 1", answer: "19" },	
      { question: "19 - 16", answer: "3" },	
      { question: "18 - 3", answer: "15" },	
    ],	
  };
*/
