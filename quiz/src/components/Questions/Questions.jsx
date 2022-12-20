import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './Questions.css'
import Option from '../Options/options'

const Questions = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestions]

    function onSelectOption(option) {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option }
        })
    }

    function nextQuestion() {
        return dispatch({ type: "CHANGE_QUESTION" })
    }

    return (
        <div id='questions'>
            <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id='options-container'>

                {
                    currentQuestion.options.map((option) => (
                        <Option
                            option={option}
                            key={option}
                            answer={currentQuestion.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))
                }

            </div>
            {
                quizState.answerSelected && (
                    <button onClick={nextQuestion}>Continuar</button>
                )
            }
        </div>
    )
}

export default Questions


