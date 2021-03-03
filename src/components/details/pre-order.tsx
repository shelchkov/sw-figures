import React, { ReactElement } from "react"

import { InputType } from "../ui/input"
import { InputWithButton } from "../ui/input-with-button"

export const PreOrder = (): ReactElement => (
	<InputWithButton
		buttonProps={{ text: "Pre-order Now" }}
		inputProps={{ type: InputType.EMAIL, placeholder: "Email" }}
	/>
)
