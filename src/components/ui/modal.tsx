import React, { ReactElement } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { ComponentWithChildren } from "../../utils/types"
import { isBrowser } from "../../utils/utils"

type Props = ComponentWithChildren<{
	isOpen: boolean
	close: () => void
}>

export const modalId = "modal-container"

const Backdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(p): string => p.theme.colors["modal-backdrop"]};
`

const Container = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	width: 250px;
	height: 250px;
	padding: 32px;
	background-color: ${(p): string => p.theme.colors["bg-100"]};
	border: 1px solid ${(p): string => p.theme.colors["stroke-100"]};
	border-radius: 16px;
	transform: translate(-50%, -50%);

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		width: 360px;
		height: 300px;
	}
`

export const Modal = ({
	children,
	isOpen,
	close,
}: Props): ReactElement => {
	if (!isOpen || !isBrowser) {
		return <></>
	}

	const modalContainer = document.querySelector(`div#${modalId}`)

	if (!modalContainer) {
		return <></>
	}

	return ReactDOM.createPortal(
		<>
			<Backdrop onClick={close}></Backdrop>
			<Container>{children}</Container>
		</>,
		modalContainer,
	)
}
