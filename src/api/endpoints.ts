const apiUrl = "https://react-test-starwars.vercel.app"

export const getProductsUrl = (page = 1): string =>
	`${apiUrl}/api/products?page=${page}`

export const getImageUrl = (image: string): string =>
	`${apiUrl}/${image}`