import React, { FormEvent, ReactElement } from "react"
import styled from "styled-components"

import { Button } from "../ui/button"
import { MobileContainer, NotMobileContainer } from "../ui/containers"
import { Input, InputType } from "../ui/input"
import { InputWithButton } from "../ui/input-with-button"

const buttonProps = { text: "Pre-order Now" }

const inputProps = {
	type: InputType.EMAIL,
	placeholder: "Email",
	name: "email",
	required: true,
}

const StyledForm = styled.form`
	max-width: 740px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		max-width: 596px;
	}
`

const InputContainer = styled.div`
	margin-bottom: 12px;
`

export const PreOrder = (): ReactElement => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<NotMobileContainer>
				<InputWithButton
					buttonProps={buttonProps}
					inputProps={inputProps}
				/>
			</NotMobileContainer>

			<MobileContainer>
				<InputContainer>
					<Input {...inputProps} />
				</InputContainer>
				<Button {...buttonProps} />
			</MobileContainer>
		</StyledForm>
	)
}
