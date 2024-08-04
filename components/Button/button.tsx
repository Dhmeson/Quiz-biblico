import { Colors } from '@/constants/Colors'
import useDelayActions from '@/hooks/useDelayActions'
import { useQuestionContext } from '@/hooks/useQuestionProvider'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
interface ButtonProps {
	text: string
	index: number
}

export default function Button({ text, index }: ButtonProps) {
	const { checkAnswer, updateLevel, endGame, question, clicked, setClicked } =
		useQuestionContext()
	const { delay } = useDelayActions()
	const [colors, setColors] = useState([Colors.light.blue3,Colors.light.blue1])

	function showCorrectAnswer() {
		if (question?.correctAnswer == index) return true
		return false
	}

	function action() {
		setClicked()
		const isCorrect = checkAnswer(index)
		if (isCorrect) return delay(1000, updateLevel)
		delay(1500, endGame)
	}
	useEffect(() => {
		if (clicked > 0) {
			if (showCorrectAnswer()) {
				setColors([Colors.light.green,Colors.light.green2])
				//invalid
			} else if (!showCorrectAnswer()) {
				setColors([Colors.light.pink2,Colors.light.pink])
			}
		}
	}, [clicked])
	return (
		<LinearGradient
			//colors={[colors]} // Cores do gradiente
			colors={[colors[0],colors[1]]}
			start={{ x: 0.5, y: 0 }} // Começa no topo
			end={{ x: 0.5, y: 1 }} // Termina na parte de baixo
			style={[styles.button, {  }]}
		>
			<TouchableOpacity onPress={action}>
				<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}
const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center'
	},
	button: {
		width: '90%',
		borderWidth: 1,
		flexGrow: 1,

		//padding: 15,
		borderRadius: 10,
		alignSelf: 'center',
		//backgroundColor: Colors.light.blue3,
		shadowColor: Colors.light.blue, // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		justifyContent: 'center'
	}
})
