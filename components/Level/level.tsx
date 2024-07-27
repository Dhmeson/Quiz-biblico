import { Colors } from '@/constants/Colors'
import { useQuestionContext } from '@/hooks/useQuestionProvider'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'

export default function Level() {
	const position = useRef(new Animated.ValueXY({ x: 0, y: -300 })).current // Começa fora da tela no topo
	const { level } = useQuestionContext()
	const animateToInitialPosition = () => {
		Animated.timing(position, {
			toValue: { x: 0, y: 0 },
			duration: 1000,
			useNativeDriver: false
		}).start()
	}

	// const animateToLeft = () => {
	// 	Animated.timing(position, {
	// 		toValue: { x: -Dimensions.get('window').width, y: 0 },
	// 		duration: 1000,
	// 		useNativeDriver: false
	// 	}).start()
	// }
	useEffect(() => {
		position.setValue({ x: 0, y: -300 })
	}, [level])
	useEffect(() => {
		animateToInitialPosition()
		// animateToLeft()
	}, [position, level])

	return (
		<Animated.View
			style={[styles.conteiner, { left: position.x, top: position.y }]}
		>
			<Text style={styles.text}>{level}</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		width: 60,
		height: 60,
		backgroundColor: Colors.light.pink3,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
		marginRight: 20,
		marginBottom: 20
		// position: 'absolute' // Necessário para a animação
	},
	text: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20
	}
})
