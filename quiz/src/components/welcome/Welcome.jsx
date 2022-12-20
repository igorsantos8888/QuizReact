import React, { useContext } from 'react'
import Quiz from '../../img/quiz.svg'
import './Welcome.css'
import { QuizContext } from '../../context/quiz'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)
/* 
  console.log(dispatch) */
  return (
    <div id='welcome'>
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome