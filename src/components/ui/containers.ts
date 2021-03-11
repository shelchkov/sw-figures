import styled from "styled-components"

export const MainContainer = styled.div`
	margin: 0 16px 16px 16px;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		margin-bottom: 44px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		margin-left: 24px;
		margin-right: 24px;
		margin-bottom: 64px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.lg}) {
		margin-left: 40px;
		margin-right: 40px;
		margin-bottom: 88px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		max-width: 1600px;
		margin-left: auto;
		margin-right: auto;
	}
`

export const MobileContainer = styled.div`
	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		display: none;
	}
`

export const NotMobileContainer = styled.div`
	display: none;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		display: block;
	}
`
