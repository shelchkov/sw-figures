import React, { ReactElement } from "react"
import styled from "styled-components"

import { ProductDetails } from "../../utils/types"
import { Heading800 } from "../ui/heading"
import { Paragraph800 } from "../ui/paragraph"

import { PreOrder } from "./pre-order"

interface Props {
	product: ProductDetails
}

const Container = styled.div`
	display: flex;
	padding: 0 80px;
	max-width: 1600px;
	margin: 0 auto 88px auto;
	background-color: ${(p): string => p.theme.colors["bg-200"]};
	border-radius: 48px;
`

const Image = styled.img`
	mix-blend-mode: darken;
`

const InfoContainer = styled.div`
	width: 50%;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const TextContainer = styled.div`
	max-width: 648px;
`

const Title = styled(Heading800)`
	margin-bottom: 32px;
`

const Description = styled(Paragraph800)`
	margin-bottom: 64px;
`

export const ProductCard = ({ product }: Props): ReactElement => (
	<Container>
		<Image src={product.image} />

		<InfoContainer>
			<TextContainer>
				<Title>{product.name}</Title>
				<Description>{product.description}</Description>
			</TextContainer>

			<PreOrder />
		</InfoContainer>
	</Container>
)
