import { useCallback, useEffect, useState } from "react"

interface Result<T> {
	data: T | undefined
	isLoading: boolean
	error?: string
	getData: (url: string) => Promise<void>
}

export const useGetData = <T>(url?: string): Result<T> => {
	const [isLoading, setIsLoading] = useState(!!url)
	const [data, setData] = useState<T>()
	const [error, setError] = useState<string>()

	const getData = useCallback(
		async (link?: string): Promise<void> => {
			const urlToUse = link || url

			if (!urlToUse || isLoading) {
				return
			}

			setIsLoading(true)

			try {
				const res = await fetch(urlToUse)
				const data = await res.json()
				setData(data)
			} catch ({ message }) {
				setError(message)
			} finally {
				setIsLoading(false)
			}
		},
		[setIsLoading, url, setData, setError, isLoading],
	)

	useEffect((): void => {
		getData()
	}, [])

	return { isLoading, data, error, getData }
}
