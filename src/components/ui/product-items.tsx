import React, { ReactElement } from "react"
import styled from "styled-components"

import { Product } from "../../utils/types"

import { ProductItem } from "./product-item"

interface Props {
	products: Product[]
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

export const ProductItems = ({ products }: Props): ReactElement => (
	<Container>
		{products.map((product) => (
			<ProductItem product={product} key={product.id} />
		))}
	</Container>
)
