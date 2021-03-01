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
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 0;
	background-color: ${(p): string => p.theme.colors["bg-200"]};
	border-radius: 48px;
	text-align: center;
`

const Image = styled.img`
	height: 255px;
	margin-bottom: 32px;
	mix-blend-mode: darken;
`

const Name = styled(Heading600)`
	margin-bottom: 12px;
	color: ${(p): string => p.theme.colors["txt-900"]};
`

const Description = styled(Paragraph400)`
	max-width: 253px;
	margin-bottom: 16px;
	color: ${(p): string => p.theme.colors["txt-800"]};
`

const getPrice = (price: number): string => `Buy $${price.toFixed(2)}`

export const ProductItem = ({ product }: Props): ReactElement => (
	<Container>
		<Image src={product.image} />
		<Name>{product.name}</Name>
		<Description>{product.shortDescription}</Description>

		<Button text={getPrice(product.price)} />
	</Container>
)
