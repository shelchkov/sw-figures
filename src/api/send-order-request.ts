import { orderRequestUrl } from "./endpoints"

export interface OrderRequest {
	error?: string
	errors?: Record<string, string>
	data?: { message: string }
}

export const sendOrderRequest = async (
	id: number,
	email: string,
): Promise<OrderRequest> => {
	const body = { productId: id, email }
	const res = await fetch(orderRequestUrl, {
		method: "POST",
		body: JSON.stringify(body),
	})
	const data = await res.json()

	return data as OrderRequest
}
