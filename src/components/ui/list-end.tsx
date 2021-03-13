import React, { createRef, ReactElement, useEffect } from "react"
import styled from "styled-components"

import { useVisibility } from "../../effects/use-visibility"

import { MainContainer } from "./containers"
import { Paragraph400 } from "./paragraph"

interface Props {
	isLoading?: boolean
	error?: string
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
	error,
	loadNext,
}: Props): ReactElement => {
	const containerRef = createRef<HTMLDivElement>()
	const { isVisible } = useVisibility({ reference: containerRef })

	useEffect(() => {
		if (isVisible) {
			loadNext && !isLoading && loadNext()
		}
	}, [isVisible, loadNext, isLoading])

	const message = (() => {
		if (error) {
			return `Error occured: ${error}`
		}

		if (isLoading) {
			return "Loading..."
		}

		return "You've reached the end."
	})()

	return (
		<Container ref={containerRef}>
			<Paragraph400>{message}</Paragraph400>
		</Container>
	)
}
