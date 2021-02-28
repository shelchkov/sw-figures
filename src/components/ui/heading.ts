import styled from "styled-components"

const Heading = styled.p`
	margin: 0;
	color: ${(p): string => p.theme.colors["accent-900"]};
	font-weight: 700;
	font-size: 56px;
	line-height: 112%;
`

export const Heading900 = styled(Heading)`
	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		font-size: 82px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		font-size: 96px;
	}
`

export const Heading800 = styled(Heading)`
	font-size: 64px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		font-size: 78px;
	}
`

export const Heading700 = styled(Heading)`
	font-size: 44px;

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		font-size: 56px;
	}
`

export const Heading600 = styled(Heading)`
	font-size: 28px;
	line-height: 132%;

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		font-size: 32px;
	}
`
