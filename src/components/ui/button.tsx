import React, { ReactElement } from "react"
import styled from "styled-components"

interface Props {
	text: string
	handleClick?: () => void
}

const StyledButton = styled.button`
	height: 50px;
	padding: 16px 24px;
	color: ${(p): string => p.theme.colors["txt-100"]};
	background-color: ${(p): string => p.theme.colors["accent-900"]};
	font-family: "Rubic", sans-serif;
	font-size: 18px;
	font-weight: 700;
	line-height: 18px;
	border: none;
	border-radius: 50px;
	box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.32);
	transition: background-color 300ms ease-in-out;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: ${(p): string => p.theme.colors["accent-800"]};
	}
`

export const Button = ({ text, handleClick }: Props): ReactElement => (
	<StyledButton onClick={handleClick}>{text}</StyledButton>
)
