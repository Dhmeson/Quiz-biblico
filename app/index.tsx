import { Link } from 'expo-router'
import { Image, StyleSheet, View, Pressable, Text } from 'react-native'

export default function index() {
	return (
		<View style={styles.conteiner}>
			<Image
				source={require('@/assets/images/bible.jpg')}
				style={styles.reactLogo}
			/>
			<Link
				style={styles.button}
				href='/question'
				asChild
			>
				<Pressable>
					<Text style={styles.text}>Jogar</Text>
				</Pressable>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	button: {
		width: '50%',
		padding: 20,
		// borderWidth: 1,
		borderRadius: 10,
		zIndex: 100,
		alignItems: 'center',
		marginBottom: 10
		// borderColor: Colors.light.pink3,
		// backgroundColor: Colors.light.roxo
	},
	text: {
		fontSize: 40,
		color: 'white'
	},

	reactLogo: {
		height: '100%',
		width: '100%',
		bottom: 0,
		left: 0,
		position: 'absolute'
	}
})

