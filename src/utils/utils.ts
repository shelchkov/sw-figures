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
		const fieldsErrors = Object.values(errors)

		if (fieldsErrors.length > 0) {
			const [field, errorMessage] = fieldsErrors[0]

			return `Error in "${field}": ${errorMessage}`
		}
	}

	if (data) {
		return data.message
	}
}
