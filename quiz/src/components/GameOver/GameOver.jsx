import React from 'react'
import { useContext } from 'react'
import QuizContext from '../../context/quiz'
import './GameOver.css'

import WellDone from '../../img/welldone.svg'

function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext)

    function newGame() {
        return dispatch ({type: "NEW_Game"})
    }

    return (
        <div id='gameover'>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={WellDone} alt="fim do quiz" />
            <button onClick={newGame}>Reiniciar</button>
        </div>
    )
}

export default GameOver