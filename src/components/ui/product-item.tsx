import React, { ReactElement } from "react"
import styled from "styled-components"

import { Product } from "../../utils/types"

import { Button } from "./button"
import { Heading600 } from "./heading"
import { Paragraph400 } from "./paragraph"

interface Props {
	product: Product
}

const Container = styled.div`
	min-width: 304px;
	max-width: 332px;
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 8px;
	padding: 24px 0;
	background-color: ${(p): string => p.theme.colors["bg-200"]};
	border-radius: 48px;
	text-align: center;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		max-width: 356px;
		padding: 40px 0;
		margin: 16px 12px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		max-width: 452px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		max-width: 424px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		max-width: 512px;
		margin: 16px;
	}
`

const Image = styled.img`
	height: 256px;
	margin-bottom: 32px;
	mix-blend-mode: darken;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		height: 394px;
	}
`

const TextContainer = styled.div`
	margin: 0 40px 16px 40px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-bottom: 24px;
	}
`

const Name = styled(Heading600)`
	margin-bottom: 12px;
	color: ${(p): string => p.theme.colors["txt-900"]};

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-bottom: 16px;
	}
`

const Description = styled(Paragraph400)`
	color: ${(p): string => p.theme.colors["txt-800"]};
`

const getPrice = (price: number): string => `Buy $${price.toFixed(2)}`

export const ProductItem = ({ product }: Props): ReactElement => (
	<Container>
		<Image src={product.image} />

		<TextContainer>
			<Name>{product.name}</Name>
			<Description>{product.shortDescription}</Description>
		</TextContainer>

		<Button text={getPrice(product.price)} />
	</Container>
)
