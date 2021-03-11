import React, { createRef, ReactElement, useEffect } from "react"
import styled from "styled-components"

import { useVisibility } from "../../effects/use-visibility"

import { MainContainer } from "./containers"
import { Paragraph400 } from "./paragraph"

interface Props {
	isLoading?: boolean
	loadNext?: () => void
}

const Container = styled(MainContainer)`
	margin-top: 16px;
	text-align: center;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-top: 44px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		margin-top: 64px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		margin-top: 88px;
	}
`

export const ListEnd = ({
	isLoading,
	loadNext,
}: Props): ReactElement => {
	const containerRef = createRef<HTMLDivElement>()
	const { isVisible } = useVisibility({ reference: containerRef })

	useEffect(() => {
		if (isVisible) {
			loadNext && !isLoading && loadNext()
		}
	}, [isVisible, loadNext, isLoading])

	return (
		<Container ref={containerRef}>
			<Paragraph400>
				{isLoading ? "Loading..." : "You've reached the end."}
			</Paragraph400>
		</Container>
	)
}
