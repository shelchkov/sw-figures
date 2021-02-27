import React, { ReactElement } from "react"
import styled from "styled-components"

const Title = styled.p`
	color: ${(p): string => p.theme.colors["accent-800"]};
`

const Index = (): ReactElement => {
	return <Title>Index</Title>
}

export default Index
