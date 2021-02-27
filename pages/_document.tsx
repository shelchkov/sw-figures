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
				<Head>{this.props.styles}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
