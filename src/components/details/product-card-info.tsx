import React, { ReactElement } from "react"
import styled from "styled-components"

import { ProductDetails } from "../../utils/types"
import { Heading800 } from "../ui/heading"
import { Paragraph800 } from "../ui/paragraph"

import { PreOrder } from "./pre-order"

type Props = ProductDetails

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

export const ProductCardInfo = ({
	name,
	description,
}: Props): ReactElement => (
	<InfoContainer>
		<TextContainer>
			<Title>{name}</Title>
			<Description>{description}</Description>
		</TextContainer>

		<PreOrder />
	</InfoContainer>
)
