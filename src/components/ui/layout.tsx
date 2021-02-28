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
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<meta
				name="description"
				content="Find the latest products for the biggest fans of the iconic saga"
			/>
		</Head>

		<Menu />
		{children}
	</>
)
