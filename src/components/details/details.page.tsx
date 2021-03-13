import { useRouter } from "next/router"
import React, { ReactElement } from "react"

import { getDetailsUrl } from "../../api/endpoints"
import { useGetData } from "../../api/use-get-data"
import { DetailsResponse } from "../../utils/types"
import { Layout } from "../ui/layout"

import { ProductCard } from "./product-card"
import { RelatedFigures } from "./related-figures"

export const DetailsPage = (): ReactElement => {
	const router = useRouter()
	const { id } = router.query
	const { data } = useGetData<DetailsResponse>({
		url: id && getDetailsUrl(id as string),
	})

	const product = data && data.data && data.data.product
	const relatedProducts = data && data.data && data.data.relatedProducts

	return (
		<Layout title="SW-figures | details">
			{product && <ProductCard product={product} />}

			<RelatedFigures products={relatedProducts || []} />
		</Layout>
	)
}
