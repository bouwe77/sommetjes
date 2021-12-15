import { useEffect, useState } from 'react'
import { getQuestions } from '../../data'

export function useQuestion(exerciseId, howManyQuestions, indexNr) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function fetch() {
      const questions = await getQuestions(exerciseId, howManyQuestions)
      let index = 1
      const questionsWithIndexNr = questions.map((q) => {
        return { ...q, nr: index++ }
      })
      setQuestions(questionsWithIndexNr)
    }
    fetch()
  }, [exerciseId, howManyQuestions])

  return questions[indexNr]
}
