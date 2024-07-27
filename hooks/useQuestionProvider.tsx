// QuestionContext.js

import { QUESTIOS_LIST, Question } from '@/constants/questions'
import React, { createContext, useContext, useState } from 'react'
import useDelayActions from './useDelayActions'

type QuestionContextType = {
	level: number
	question: Question | null
	updateLevel: () => void
	getRandomQuestion: () => void
	checkAnswer: (selectedAnswer: number) => boolean
	gameState: boolean
	endGame: () => void
	startGame: () => void
	clicked: number
	setClicked: () => void
	resetGame: () => void
}
const QuestionContext = createContext<QuestionContextType | null>(null)

// export const useQuestionContext = () => useContext(QuestionContext)

export const useQuestionContext = () => {
	const context = useContext(QuestionContext)
	if (!context) {
		throw new Error(
			'useQuestionContext must be used within a QuestionProvider'
		)
	}
	return context
}
export const QuestionProvider = ({ children }: any) => {
	const [level, setLevel] = useState(1)
	const [clicked, setClicked] = useState(0)

	const [question, setQuestion] = useState<Question | null>(null)
	const [gameState, setGameState] = useState(false)
	const { delay } = useDelayActions()
	function onClicked() {
		setClicked(clicked + 1)
	}
	function resetGame() {
		setClicked(0)
		setGameState(false)
		setLevel(1)
		getRandomQuestion()
	}
	const updateLevel = () => {
		setClicked(0)
		delay(200, () => setLevel(level + 1))
	}
	const endGame = () => {
		setGameState(true)
		setClicked(0)
	}
	const startGame = () => {
		setGameState(false)
		setLevel(1)
		getRandomQuestion()
		setClicked(0)
	}
	const getRandomQuestion = () => {
		const randomIndex = Math.floor(Math.random() * QUESTIOS_LIST.length)
		setQuestion(QUESTIOS_LIST[randomIndex])
	}
	// function correctAnswer() {
	// 	updateLevel()
	// 	getRandomQuestion()
	// }

	const checkAnswer = (selectedAnswer: number) => {
		if (question && question.correctAnswer === selectedAnswer) {
			return true
			// Aqui você pode fazer o que quiser em caso de resposta correta
		} else {
			console.log('Resposta incorreta!')
			return false
			// Aqui você pode fazer o que quiser em caso de resposta incorreta
		}
	}

	return (
		<QuestionContext.Provider
			value={{
				level,
				question,
				updateLevel,
				getRandomQuestion,
				checkAnswer,
				endGame,
				gameState,
				startGame,
				clicked,
				setClicked: onClicked,
				resetGame
			}}
		>
			{children}
		</QuestionContext.Provider>
	)
}
