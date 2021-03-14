import React, { ReactElement } from "react"
import styled from "styled-components"

import { getImageUrl } from "../../api/endpoints"
import { ProductDetails } from "../../utils/types"
import { MainContainer } from "../ui/containers"

import { Loading } from "./loading"
import { ProductCardInfo } from "./product-card-info"

interface Props {
	product: ProductDetails | undefined
	isLoading: boolean
	error?: string
}

const Background = styled.div`
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

export const ProductCard = ({
	product,
	isLoading,
	error,
}: Props): ReactElement => (
	<MainContainer>
		{product && !isLoading && !error ? (
			<Background>
				<Image src={getImageUrl(product.image)} />

				<ProductCardInfo {...product} />
			</Background>
		) : (
			<Loading isLoading={isLoading} error={error} />
		)}
	</MainContainer>
)
