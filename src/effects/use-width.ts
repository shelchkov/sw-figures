import { useEffect, useState } from "react"

import { isBrowser } from "../utils/utils"

interface Props {
	breakpoint: number
}

interface Result {
	isLess: boolean | undefined
}

const getWidth = (): number | undefined =>
	isBrowser ? window.innerWidth : undefined

export const useWidth = ({ breakpoint }: Props): Result => {
	const [width, setWidth] = useState(getWidth())

	useEffect(() => {
		const handleResize = () => {
			setWidth(getWidth())
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [setWidth])

	const isLess = width ? width < breakpoint : undefined

	return { isLess }
}
