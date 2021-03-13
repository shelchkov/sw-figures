import React, { ReactElement } from "react"

import { getProductsUrl } from "../../api/endpoints"
import { useGetDataPage } from "../../api/use-get-data-page"
import { Product } from "../../utils/types"
import { Layout } from "../ui/layout"
import { ListEnd } from "../ui/list-end"
import { ProductItems } from "../ui/product-items"

import { HomeHeader } from "./home-header"

export const HomePage = (): ReactElement => {
	const { data, isLoading, getNextPage } = useGetDataPage<Product>({
		getUrl: getProductsUrl,
	})

	return (
		<Layout title="SW-figures | Home">
			<HomeHeader />

			<ProductItems products={data || []} />

			<ListEnd isLoading={isLoading} loadNext={getNextPage} />
		</Layout>
	)
}
