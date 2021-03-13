import React, { ReactElement } from "react"
import styled from "styled-components"

import { Paragraph400 } from "../ui/paragraph"

interface Props {
	isLoading: boolean
	error?: string
}

const Container = styled.div`
	text-align: center;
`

const getText = (
	isLoading: boolean,
	error?: string,
): string | undefined => {
	if (error) {
		return `Error occured: ${error}`
	}

	return isLoading ? "Loading..." : undefined
}

export const Loading = ({ isLoading, error }: Props): ReactElement => (
	<Container>
		<Paragraph400>{getText(isLoading, error)}</Paragraph400>
	</Container>
)
