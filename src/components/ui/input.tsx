import { ChangeEvent, MutableRefObject } from "react"
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
	ref?: MutableRefObject<HTMLInputElement | null>
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = styled.input`
	width: 100%;
	padding: 8px 16px;
	color: ${(p): string => p.theme.colors["txt-900"]};
	background-color: ${(p): string => p.theme.colors["off-white"]};
	font-size: 16px;
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

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		padding: 25px 32px;
		font-size: 24px;
	}
`
