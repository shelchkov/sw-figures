import React, { ReactElement } from "react"
import styled from "styled-components"

import { ProductDetails } from "../../utils/types"
import { MainContainer } from "../ui/containers"
import { Heading800 } from "../ui/heading"
import { Paragraph800 } from "../ui/paragraph"

import { PreOrder } from "./pre-order"

interface Props {
	product: ProductDetails
}

const Container = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	padding: 0 0 24px 0;
	background-color: ${(p): string => p.theme.colors["bg-200"]};
	border-radius: 48px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		padding: 0 80px;
		flex-direction: row;
	}
`

const Image = styled.img`
	mix-blend-mode: darken;
	width: 100%;
	max-width: 400px;
	height: auto;
	margin: 0 auto;

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		max-width: 604px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		width: auto;
		margin: 0;
	}
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 24px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		padding: 0 36px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		padding: 0 60px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		width: 50%;
		margin-left: auto;
		padding: 0;
	}
`

const TextContainer = styled.div`
	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		max-width: 648px;
	}
`

const Title = styled(Heading800)`
	margin-bottom: 16px;
	font-size: 32px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		margin-bottom: 32px;
	}
`

const Description = styled(Paragraph800)`
	margin-bottom: 32px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		margin-bottom: 64px;
	}
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
