import React, { ReactElement } from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Image = styled.img`
	height: 51px;
`

export const Menu = (): ReactElement => (
	<MenuContainer>
		<Image src="/icons/logo.svg" />
	</MenuContainer>
)
