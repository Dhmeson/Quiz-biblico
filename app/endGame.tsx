import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useQuestionContext } from '@/hooks/useQuestionProvider'
import useStorage from '@/hooks/useStorage'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from 'expo-router'

export default function Page() {
	const { level, startGame, resetGame } = useQuestionContext()
	const [maxPoints, setMaxPoints] = useState('0')
	const { getData, saveData } = useStorage()
	const { navigate } = useNavigation()
	useEffect(() => {
		async function init() {
			const maxScore = (await getData('Level')) ?? '0'
			setMaxPoints(maxScore)
			if (level > +maxScore) {
				setMaxPoints(level.toString())
				resetGame()
				await saveData('Level', level.toString())
			}
		}
		init()
	}, [])
	function restartGame() {
		startGame()
		//@ts-ignore
		navigate('question')
	}
	function goToMenu() {
		startGame()
		//@ts-ignore
		navigate('index')
	}
	return (
		<View style={styles.conteiner}>
			<View>
				<Text style={styles.text}>Maior Pontuação</Text>
				<Text style={styles.pointTxt}>{maxPoints}</Text>
			</View>
			<View style={{ marginTop: 10 }}>
				<Text style={styles.text}>Seu pontos!</Text>
				<Text style={styles.pointTxt}>{level}</Text>
			</View>
			<View
				style={{
					height: '30%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'flex-end'
				}}
			>
				<LinearGradient
					colors={[
						Colors.light.blue,
						Colors.light.blue1,
						Colors.light.blue3
					]} // Cores do gradiente
					start={{ x: 0.5, y: 0 }} // Começa no topo
					end={{ x: 0.5, y: 1 }} // Termina na parte de baixo
					style={styles.button}
				>
					<TouchableOpacity
						onPress={restartGame}
						style={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={styles.text}>Jogar</Text>
					</TouchableOpacity>
				</LinearGradient>

				<LinearGradient
					colors={[
						Colors.light.blue,
						Colors.light.blue1,
						Colors.light.blue3
					]} // Cores do gradiente
					start={{ x: 0.5, y: 0 }} // Começa no topo
					end={{ x: 0.5, y: 1 }} // Termina na parte de baixo
					style={styles.button}
				>
					<TouchableOpacity
						//@ts-ignore
						onPress={goToMenu}
						style={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={styles.text}>Menu</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		backgroundColor: Colors.light.black,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		width: '90%',
		borderWidth: 1,
		padding: 10,
		marginBottom: 20,
		//padding: 15,
		borderRadius: 10,
		//alignSelf: 'center',
		backgroundColor: Colors.light.blue3,
		shadowColor: Colors.light.blue, // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		justifyContent: 'center'
	},
	pointTxt: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},
	text: {
		fontSize: 30,
		color: 'white'
	}
})
