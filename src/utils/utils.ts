export const getPrice = (price: number): string =>
	(price / 100).toFixed(2)

export const isBrowser = typeof document === "object"
