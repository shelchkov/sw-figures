import React, { ReactElement } from "react"
import styled from "styled-components"

import { Button, ButtonProps, StyledButton } from "./button"
import { Input, InputProps } from "./input"

interface Props {
	inputProps: InputProps
	buttonProps: ButtonProps
}

const buttonWidth = 230

const Container = styled.div`
	position: relative;
	width: fit-content;
`

const StyledInput = styled(Input)`
	padding: 25px ${buttonWidth + 16}px 25px 32px;
`

const ButtonWithStyles = styled(StyledButton)`
	position: absolute;
	top: 10px;
	right: 10px;
`

export const InputWithButton = ({
	inputProps,
	buttonProps,
}: Props): ReactElement => (
	<Container>
		<StyledInput {...inputProps} />
		<Button {...buttonProps} Component={ButtonWithStyles} />
	</Container>
)
