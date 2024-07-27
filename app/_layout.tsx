import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'

import { QuestionProvider } from '@/hooks/useQuestionProvider'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
	})

	if (!loaded) {
		return null
	}

	return (
		<QuestionProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='+not-found' />
			</Stack>
		</QuestionProvider>
	)
}

