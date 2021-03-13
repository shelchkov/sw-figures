import { useRouter } from "next/router"
import React, { ReactElement, useEffect } from "react"

import { getDetailsUrl } from "../../api/endpoints"
import { useGetData } from "../../api/use-get-data"
import { DetailsResponse } from "../../utils/types"
import { Layout } from "../ui/layout"

import { ProductCard } from "./product-card"
import { RelatedFigures } from "./related-figures"

export const DetailsPage = (): ReactElement => {
	const router = useRouter()
	const { id } = router.query
	const {
		data,
		isLoading,
		error,
		getData,
	} = useGetData<DetailsResponse>()

	const product = data && data.data && data.data.product
	const relatedProducts = data && data.data && data.data.relatedProducts

	useEffect(() => {
		id && !data && getData(getDetailsUrl(id as string))
	}, [id])

	return (
		<Layout title="SW-figures | details">
			<ProductCard
				product={product}
				isLoading={isLoading}
				error={error}
			/>

			{!isLoading && !error && (
				<RelatedFigures products={relatedProducts} />
			)}
		</Layout>
	)
}
