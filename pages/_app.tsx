import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { theme } from "../src/theme/theme"

const App = ({ Component, pageProps }: AppProps): ReactElement => (
	<ThemeProvider theme={theme}>
		<Component {...pageProps} />
	</ThemeProvider>
)

export default App
