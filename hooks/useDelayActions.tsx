export default function useDelayActions() {
	function delay(n: number, action: () => void) {
		setTimeout(() => {
			action()
		}, n)
	}
	return {
		delay
	}
}
