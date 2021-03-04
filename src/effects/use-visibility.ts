import { RefObject, useEffect, useState } from "react"

interface Props {
	reference: RefObject<HTMLElement>
}

interface UseVisibility {
	isVisible: boolean | undefined
}

const checkVisibility = (
	reference: RefObject<HTMLElement>,
): boolean | undefined => {
	if (!reference.current) {
		return
	}

	const { top, height } = reference.current.getBoundingClientRect()
	const { clientHeight } = document.documentElement

	if (top < clientHeight && top > -height) {
		return true
	}

	return false
}

export const useVisibility = ({ reference }: Props): UseVisibility => {
	const [isVisible, setIsVisible] = useState<boolean>()

	useEffect((): (() => void) => {
		const handleScroll = (): void => {
			const isVisible = checkVisibility(reference)
			setIsVisible(isVisible)
		}

		window.addEventListener("scroll", handleScroll)

		handleScroll()

		return (): void => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [reference])

	return { isVisible }
}
