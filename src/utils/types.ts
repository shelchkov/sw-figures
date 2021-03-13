import { ReactNode } from "react"

export type ComponentWithChildren<T> = T & { children: ReactNode }

export interface Product {
	id: number
	shortDescription: string
	image: string
	name: string
	price: number
}

export type ProductDetails = Product & {
	description: string
}

export interface DetailsResponse {
	data: {
		product: ProductDetails
		relatedProducts: Product[]
	}
}
