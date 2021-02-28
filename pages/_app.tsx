import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { theme } from "../src/theme/theme"
import { GlobalStyle } from "../src/theme/global-style"

const App = ({ Component, pageProps }: AppProps): ReactElement => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Component {...pageProps} />
	</ThemeProvider>
)

export default App
