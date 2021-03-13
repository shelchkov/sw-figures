import React, { ReactElement } from "react"
import styled from "styled-components"

import { Button, StyledButton } from "../ui/button"
import { Paragraph400 } from "../ui/paragraph"

interface Props {
	message?: string
	close: () => void
}

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const WideButton = styled(StyledButton)`
	min-width: 184px;
	margin-top: 32px;
`

export const PreOrderModal = ({
	message,
	close,
}: Props): ReactElement => (
	<Container>
		{message && <Paragraph400>{message}</Paragraph400>}

		<Button text="OK" handleClick={close} Component={WideButton} />
	</Container>
)
