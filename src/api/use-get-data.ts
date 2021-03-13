import { useCallback, useEffect, useState } from "react"

interface Props {
	url: string | undefined
}

interface Result<T> {
	data: T | undefined
	isLoading: boolean
	error?: string
}

export const useGetData = <T>({ url }: Props): Result<T> => {
	const [isLoading, setIsLoading] = useState(!!url)
	const [data, setData] = useState<T>()
	const [error, setError] = useState<string>()

	const getData = useCallback(async (): Promise<void> => {
		if (!url) {
			return
		}

		setIsLoading(true)

		try {
			const res = await fetch(url)
			const data = await res.json()
			setData(data)
		} catch ({ message }) {
			setError(message)
		} finally {
			setIsLoading(false)
		}
	}, [setIsLoading, url, setData, setError])

	useEffect((): void => {
		getData()
	}, [])

	return { isLoading, data, error }
}
