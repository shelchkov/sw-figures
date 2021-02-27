import React, { ReactElement } from "react"
import styled from "styled-components"

import { Layout } from "../src/components/ui/layout"

const Title = styled.p`
	color: ${(p): string => p.theme.colors["accent-800"]};
`

const Index = (): ReactElement => (
	<Layout title="Home">
		<Title>Index</Title>
	</Layout>
)

export default Index
