import { QuestionProvider } from '@/hooks/useQuestionProvider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'
import React, { useCallback, useEffect, useState } from 'react'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		// Carregue suas fontes aqui
		'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null // Ou um componente de carregamento
	}

	return (
		<QuestionProvider>
			<Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
				<Stack.Screen name='+not-found' />
			</Stack>
		</QuestionProvider>
	)
}
