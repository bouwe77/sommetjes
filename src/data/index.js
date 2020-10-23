import {
  getAdditionSums,
  getMultiplicationTable,
  getSubtractionSums,
} from "../calculations";

export default {
  "Optellen onder de 10": {
    getQuestions: () => getAdditionSums(1, 10, 10),
  },
  "Optellen onder de 20": {
    getQuestions: () => getAdditionSums(5, 20, 10, 10),
  },
  "Aftrekken onder de 10": {
    getQuestions: () => getSubtractionSums(1, 10, 10),
  },
  "Aftrekken onder de 20": {
    getQuestions: () => getSubtractionSums(5, 20, 10, 10),
  },
  "Tafel van 3": {
    getQuestions: () => getMultiplicationTable(3, 10),
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
