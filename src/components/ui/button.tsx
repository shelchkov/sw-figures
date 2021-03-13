import React, { ElementType, ReactElement } from "react"
import styled from "styled-components"

export interface ButtonProps {
	text: string
	isDisabled?: boolean
	handleClick?: () => void
	Component?: ElementType
}

export const StyledButton = styled.button`
	height: 50px;
	padding: 16px 24px;
	color: ${(p): string => p.theme.colors["txt-100"]};
	background-color: ${(p): string => p.theme.colors["accent-900"]};
	font-family: "Rubic", sans-serif;
	font-size: 18px;
	font-weight: 700;
	line-height: 100%;
	border: none;
	border-radius: 50px;
	box-shadow: ${(p): string => p.theme.shadows.sh200};
	transition: background-color 300ms ease-in-out;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: ${(p): string => p.theme.colors["accent-800"]};
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		height: 68px;
		padding: 22px 32px;
		font-size: 24px;
	}
`

export const Button = ({
	text,
	isDisabled,
	handleClick,
	Component,
}: ButtonProps): ReactElement => {
	const ButtonElement = Component || StyledButton

	return (
		<ButtonElement onClick={handleClick} disabled={isDisabled}>
			{text}
		</ButtonElement>
	)
}
