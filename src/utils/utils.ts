import { OrderRequest } from "../api/send-order-request"

export const getPrice = (price: number): string =>
	(price / 100).toFixed(2)

export const isBrowser = typeof document === "object"

export const getOrderRequestMessage = (
	res: OrderRequest,
): string | undefined => {
	const { error, errors, data } = res

	if (error) {
		return error
	}

	if (errors) {
		const [fieldError] = Object.entries(errors)

		if (fieldError) {
			const [field, errorMessage] = fieldError

			return `Error in "${field}": ${errorMessage}`
		}
	}

	if (data) {
		return data.message
	}
}
