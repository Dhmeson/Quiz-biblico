import AsyncStorage from '@react-native-async-storage/async-storage'
type keyStorage = 'Level'
export default function useStorage() {
	const saveData = async (key: keyStorage, inputValue: string) => {
		try {
			await AsyncStorage.setItem(key, inputValue)
		} catch {
			// saving error
		}
	}
	const getData = async (key: keyStorage) => {
		try {
			return await AsyncStorage.getItem(key)
		} catch {
			return null
		}
	}
	return { saveData, getData }
}
