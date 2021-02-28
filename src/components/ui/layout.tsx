import React, { ReactElement } from "react"
import Head from "next/head"

import { ComponentWithChildren } from "../../utils/types"

import { Menu } from "./menu"

type Props = ComponentWithChildren<{
	title: string
}>

export const Layout = ({ title, children }: Props): ReactElement => (
	<>
		<Head>
			<title>{title}</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>

		<Menu />
		{children}
	</>
)
