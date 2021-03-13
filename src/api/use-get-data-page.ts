import { useCallback, useEffect, useRef, useState } from "react"

interface Props {
	getUrl: (page: number) => string
}

interface Result<T> {
	data: T[] | undefined
	isLoading: boolean
	getNextPage: () => void
	error?: string
}

interface Data<T> {
	data: T[]
	meta: {
		totalPages: number
	}
}

export const useGetDataPage = <T>({ getUrl }: Props): Result<T> => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState<T[]>()
	const [error, setError] = useState<string>()
	const page = useRef({ current: 1, total: 1 })

	const getData = useCallback(
		async (pageNumber = 1): Promise<Data<T> | undefined> => {
			try {
				const url = getUrl(pageNumber)
				const res = await fetch(url)
				const data = (await res.json()) as Data<T>

				page.current.total = data.meta.totalPages

				return data
			} catch ({ message }) {
				setError(message)
			}
		},
		[getUrl, setError],
	)

	const getNextPage = useCallback(async (): Promise<void> => {
		const { current, total } = page.current

		if (current >= total) {
			return
		}

		setIsLoading(true)
		const nextPageData = await getData(++page.current.current)

		if (!nextPageData) {
			return
		}

		setData([...(data || []), ...nextPageData.data])
		setIsLoading(false)
	}, [setIsLoading, getData, setData, data])

	useEffect(() => {
		setIsLoading(true)

		getData().then((data) => {
			data && setData(data.data)
			setIsLoading(false)
		})
	}, [])

	return { isLoading, data, error, getNextPage }
}
