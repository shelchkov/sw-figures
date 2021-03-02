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
	max-width: 1632px;

	margin: -8px 8px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin: -16px 4px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		margin-left: 12px;
		margin-right: 12px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		margin-left: 28px;
		margin-right: 28px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		margin-left: auto;
		margin-right: auto;
	}
`

export const ProductItems = ({ products }: Props): ReactElement => (
	<Container>
		{products.map((product) => (
			<ProductItem product={product} key={product.id} />
		))}
	</Container>
)
