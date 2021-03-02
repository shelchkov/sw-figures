import { ReactNode } from "react"

export type ComponentWithChildren<T> = T & { children: ReactNode }

export interface Product {
	id: number
	shortDescription: string
	image: string
	name: string
	price: number
}
