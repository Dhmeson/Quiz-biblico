import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import { useQuestionContext } from '@/hooks/useQuestionProvider'

const { width: screenWidth } = Dimensions.get('window')

export default function Count() {
	const animatedWidth = useRef(new Animated.Value(screenWidth)).current
	const { level, endGame, gameState } = useQuestionContext()

	useEffect(() => {
		animatedWidth.setValue(screenWidth)
		animatedWidth.resetAnimation()

		Animated.timing(animatedWidth, {
			toValue: 0,
			duration: 10000, // duração da animação em milissegundos
			useNativeDriver: false
		}).start((c) => {
			console.log(c)
			if (c.finished) onCountEnd() // Chama a função quando a animação termina
		})
	}, [animatedWidth, level, gameState])
	const onCountEnd = () => {
		if (!gameState) endGame()
	}

	return (
		<View style={styles.container}>
			<Animated.View
				style={[styles.animatedButton, { width: animatedWidth }]}
			>
				<LinearGradient
					colors={[
						Colors.light.pink3,
						Colors.light.pink2,
						Colors.light.pink3
					]}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={styles.gradient}
				>
					<View style={styles.buttonContent}></View>
				</LinearGradient>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center'
		width: '100%',
		height: 20,
		backgroundColor: Colors.light.black
	},
	animatedButton: {
		height: 70, // altura do botão
		borderRadius: 10
	},
	gradient: {
		//flex: 1,
		width: '100%',
		height: 20,
		//justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	buttonContent: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	text: {
		fontSize: 20,
		color: 'white'
	}
})
