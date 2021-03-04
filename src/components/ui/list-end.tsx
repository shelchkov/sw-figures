import React, { createRef, ReactElement, useEffect } from "react"
import styled from "styled-components"

import { useVisibility } from "../../effects/use-visibility"

import { Paragraph400 } from "./paragraph"

interface Props {
	isLoading?: boolean
	loadNext?: () => void
}

const Container = styled.div`
	margin: 16px;
	text-align: center;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-top: 44px;
		margin-bottom: 44px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		margin: 65px 24px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		margin: 88px 40px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		margin-left: auto;
		margin-right: auto;
		max-width: 1600px;
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
