import React, { FormEvent, ReactElement } from "react"

import { InputType } from "../ui/input"
import { InputWithButton } from "../ui/input-with-button"

export const PreOrder = (): ReactElement => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
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
