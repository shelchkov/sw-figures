import React, { ReactElement } from "react"
import styled from "styled-components"

import { Paragraph400 } from "../ui/paragraph"

const Container = styled.div`
	text-align: center;
`

export const NothingFound = (): ReactElement => (
	<Container>
		<Paragraph400>Nothing was found</Paragraph400>
	</Container>
)
