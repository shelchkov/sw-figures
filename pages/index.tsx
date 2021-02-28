import React, { ReactElement } from "react"

import { HomeHeader } from "../src/components/home/home-header"
import { Layout } from "../src/components/ui/layout"

const Index = (): ReactElement => (
	<Layout title="SW-figures | Home">
		<HomeHeader />
	</Layout>
)

export default Index
