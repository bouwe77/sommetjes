import useLocalStorage from "../shared/useLocalStorage";

const defaultHowManyQuestions = 10;

export default function useSettings() {
  const [howManyQuestions, setHowManyQuestions] = useLocalStorage(
    "howManyQuestions",
    defaultHowManyQuestions
  );

  function saveHowManyQuestions(newValue) {
    if (!newValue || isNaN(newValue) || newValue <= 0) {
      return howManyQuestions;
    } else {
      let parsedNewValue = parseInt(newValue);
      setHowManyQuestions(parsedNewValue);
      return parsedNewValue;
    }
  }

  const settings = { howManyQuestions };

  return { settings, saveHowManyQuestions };
}
