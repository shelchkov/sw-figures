import React, { ReactElement } from "react"
import styled from "styled-components"

import { Heading900 } from "../ui/heading"
import { Paragraph900 } from "../ui/paragraph"

const Container = styled.div`
  height 512px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		height: 660px;
	}
`

const TextContainer = styled.div`
	width: 320px;
	text-align: center;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		width: 582px;
	}
`

const Heading = styled(Heading900)`
	margin-bottom: 32px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-bottom: 48px;
	}
`

export const HomeHeader = (): ReactElement => (
	<Container>
		<TextContainer>
			<Heading as="h1">Star Wars Figures</Heading>
			<Paragraph900>
				Find the latest products for the biggest fans of the iconic
				saga.
			</Paragraph900>
		</TextContainer>
	</Container>
)
