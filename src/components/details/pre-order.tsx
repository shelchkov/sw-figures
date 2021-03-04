import React, { ChangeEvent, ReactElement } from "react"

import { InputType } from "../ui/input"
import { InputWithButton } from "../ui/input-with-button"

export const PreOrder = (): ReactElement => {
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		const emailInput = event.target[0] as HTMLInputElement
		console.log(emailInput.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputWithButton
				buttonProps={{ text: "Pre-order Now" }}
				inputProps={{
					type: InputType.EMAIL,
					placeholder: "Email",
					name: "email",
					required: true,
				}}
			/>
		</form>
	)
}
