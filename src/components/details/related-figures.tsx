import React, { ReactElement } from "react"
import styled from "styled-components"

import { Product } from "../../utils/types"
import { Heading700 } from "../ui/heading"
import { ProductItems } from "../ui/product-items"

interface Props {
	products: Product[]
}

const Container = styled.div`
	max-width: 1600px;
	margin: 0 auto 32px auto;
`

export const RelatedFigures = ({ products }: Props): ReactElement => (
	<>
		<Container>
			<Heading700>Related Figures</Heading700>
		</Container>

		<ProductItems products={products} />
	</>
)
