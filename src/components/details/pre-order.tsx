import React, {
	ChangeEvent,
	FormEvent,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from "react"
import styled from "styled-components"

import { useWidth } from "../../effects/use-width"
import { theme } from "../../theme/theme"
import { Button, ButtonProps } from "../ui/button"
import { MobileContainer, NotMobileContainer } from "../ui/containers"
import { Input, InputProps, InputType } from "../ui/input"
import { InputWithButton } from "../ui/input-with-button"
import { Modal } from "../ui/modal"

import { PreOrderModal } from "./pre-order-modal"

const StyledForm = styled.form`
	max-width: 740px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		max-width: 596px;
	}
`

const InputContainer = styled.div`
	margin-bottom: 12px;
`

const inputs = {
	email: "email",
}

const buttonProps: ButtonProps = {
	text: "Pre-order Now",
}

const initInputProps: InputProps = {
	type: InputType.EMAIL,
	placeholder: "Email",
	name: inputs.email,
	required: true,
}

export const PreOrder = (): ReactElement => {
	const [isOpen, setIsOpen] = useState(false)
	const formValues = useRef<Record<string, string>>({})
	const mobileEmailInput = useRef<HTMLInputElement>(null)
	const emailInput = useRef<HTMLInputElement>(null)

	const { isLess } = useWidth({
		breakpoint: parseInt(theme.breakpoints.sm),
	})

	useEffect(() => {
		const mobileCur = mobileEmailInput.current
		const cur = emailInput.current
		const inputValue = formValues.current[inputs.email] || ""

		if (mobileCur) {
			mobileCur.required = !!isLess
			mobileCur.value = inputValue
		}

		if (cur) {
			cur.required = !isLess
			cur.value = inputValue
		}
	}, [isLess])

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(formValues.current[inputs.email])
		setIsOpen(true)
	}

	const closeModal = () => setIsOpen(false)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget
		formValues.current[name] = value
	}

	const inputProps: InputProps = {
		...initInputProps,
		onChange: handleInputChange,
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<NotMobileContainer>
				<InputWithButton
					buttonProps={buttonProps}
					inputProps={{
						...inputProps,
						reference: emailInput,
					}}
				/>
			</NotMobileContainer>

			<MobileContainer>
				<InputContainer>
					<Input {...inputProps} reference={mobileEmailInput} />
				</InputContainer>
				<Button {...buttonProps} />
			</MobileContainer>

			<Modal isOpen={isOpen} close={closeModal}>
				<PreOrderModal message="Text" close={closeModal} />
			</Modal>
		</StyledForm>
	)
}
