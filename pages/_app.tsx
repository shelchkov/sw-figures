import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { theme } from "../src/theme/theme"
import { GlobalStyle } from "../src/theme/global-style"
import { modalId } from "../src/components/ui/modal"

const App = ({ Component, pageProps }: AppProps): ReactElement => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Component {...pageProps} />
		<div id={modalId} />
	</ThemeProvider>
)

export default App
