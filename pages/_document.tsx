import Document, {
	DocumentContext,
	DocumentInitialProps,
	DocumentProps,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document"
import React, { ReactElement } from "react"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document<DocumentProps> {
	static async getInitialProps({
		renderPage,
	}: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()

		const page = await renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />),
		)

		const styleTags = sheet.getStyleElement()

		return { ...page, styles: styleTags }
	}

	render(): ReactElement {
		return (
			<Html>
				<Head>
					{this.props.styles}
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
