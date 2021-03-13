import React, { ReactElement } from "react"
import styled from "styled-components"

import { Product } from "../../utils/types"
import { MainContainer } from "../ui/containers"
import { Heading700 } from "../ui/heading"
import { ProductItems } from "../ui/product-items"

import { NothingFound } from "./nothing-found"

interface Props {
	products: Product[] | undefined
}

const Container = styled.div`
	margin-bottom: 16px;
	margin-top: 88px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-bottom: 44px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		margin-bottom: 64px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		margin-bottom: 88px;
	}
`

const TextContainer = styled(MainContainer)`
	margin-bottom: 32px;
`

export const RelatedFigures = ({ products }: Props): ReactElement => (
	<Container>
		<TextContainer>
			<Heading700>Related Figures</Heading700>
		</TextContainer>

		{products && products.length > 0 ? (
			<ProductItems products={products} />
		) : (
			<NothingFound />
		)}
	</Container>
)
