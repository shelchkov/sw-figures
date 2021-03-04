import React, { ReactElement } from "react"
import styled from "styled-components"

export enum InputType {
	EMAIL = "email",
	NUMBER = "number",
}

export interface InputProps {
	type?: InputType
	placeholder?: string
	name: string
	required?: boolean
}

const StyledInput = styled.input`
	width: 596px;
	padding: 25px 32px;
	color: ${(p): string => p.theme.colors["txt-900"]};
	background-color: ${(p): string => p.theme.colors["off-white"]};
	font-size: 24px;
	line-height: 142%;
	border: 2px solid ${(p): string => p.theme.colors["stroke-100"]};
	border-radius: 72px;
	outline: none;

	&:hover {
		border-color: ${(p): string => p.theme.colors["stroke-200"]};
	}

	&:focus {
		border-color: ${(p): string => p.theme.colors["accent-800"]};
	}
`

export const Input = ({
	type,
	placeholder,
	name,
	required,
}: InputProps): ReactElement => (
	<StyledInput
		type={type}
		placeholder={placeholder}
		name={name}
		required={required}
	/>
)
