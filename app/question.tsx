import { Colors } from '@/constants/Colors'
import { StyleSheet, View, Text } from 'react-native'
import Count from '@/components/Count/count'
import Level from '@/components/Level/level'
import { useEffect } from 'react'
import { useQuestionContext } from '@/hooks/useQuestionProvider'
import { useNavigation } from 'expo-router'
import Button from '@/components/Button/button'

export default function Page() {
	const { level, question, getRandomQuestion, gameState } =
		useQuestionContext()
	const { navigate } = useNavigation()
	useEffect(() => {
		getRandomQuestion()
	}, [level])
	useEffect(() => {
		if (gameState) {
			//@ts-ignore
			navigate('endGame')
		}
	}, [gameState])
	return (
		<View style={styles.conteiner}>
			<View style={styles.questionConteiner}>
				<Level />

				<Text style={styles.text}>{question?.title}</Text>
			</View>
			<Count />

			<View style={styles.answerConteiner}>
				{question?.answers.map((answer, i) => {
					return (
						<Button
							index={i}
							text={answer}
							key={answer}
						/>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		height: '100%'
	},
	questionConteiner: {
		height: '50%',
		backgroundColor: Colors.light.black,

		justifyContent: 'center'
	},
	answerConteiner: {
		//height: '40%',
		backgroundColor: Colors.light.black,
		flex: 1,
		alignContent: 'center',
		gap: 15,
		paddingVertical: 15
	},
	text: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
		width: '100%',
		paddingHorizontal: 10
	},
	button: {
		width: '90%',
		borderWidth: 1,
		padding: 15,
		borderRadius: 10,
		alignSelf: 'center',
		backgroundColor: Colors.light.roxo
	},
	reactLogo: {
		height: '100%',
		width: '100%',
		bottom: 0,
		left: 0,
		position: 'absolute'
	}
})
