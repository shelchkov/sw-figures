import { useRouter } from "next/router"
import React, {
	ChangeEvent,
	FormEvent,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from "react"
import styled from "styled-components"

import { sendOrderRequest } from "../../api/send-order-request"
import { useWidth } from "../../effects/use-width"
import { theme } from "../../theme/theme"
import { getOrderRequestMessage } from "../../utils/utils"
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

const inputs = { email: "email" }

const initButtonProps: ButtonProps = { text: "Pre-order Now" }

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
	const router = useRouter()
	const [modalMessage, setModalMessage] = useState<string>()
	const [isSubmitting, setIsSubmitting] = useState(false)

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

	const { id } = router.query

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault()
		const email = formValues.current[inputs.email]

		if (!id || !email || isSubmitting) {
			return
		}

		setIsSubmitting(true)

		const data = await sendOrderRequest(parseInt(id as string), email)
		setModalMessage(getOrderRequestMessage(data))

		setIsOpen(true)
		setIsSubmitting(false)
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

	const buttonProps: ButtonProps = {
		...initButtonProps,
		isDisabled: isSubmitting,
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<NotMobileContainer>
				<InputWithButton
					buttonProps={buttonProps}
					inputProps={{ ...inputProps, ref: emailInput }}
				/>
			</NotMobileContainer>

			<MobileContainer>
				<InputContainer>
					<Input {...inputProps} ref={mobileEmailInput} />
				</InputContainer>
				<Button {...buttonProps} />
			</MobileContainer>

			<Modal isOpen={isOpen} close={closeModal}>
				<PreOrderModal message={modalMessage} close={closeModal} />
			</Modal>
		</StyledForm>
	)
}
