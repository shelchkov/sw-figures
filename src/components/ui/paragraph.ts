import styled from "styled-components"

const Paragraph = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 24px;
	line-height: 142%;
	color: ${(p): string => p.theme.colors["accent-900"]};
`

export const Paragraph900 = styled(Paragraph)`
	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		font-size: 28px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		font-size: 32px;
	}
`

export const Paragraph800 = styled(Paragraph)`
	font-size: 21px;

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		font-size: 24px;
	}
`

export const Paragraph400 = styled(Paragraph)`
	font-size: 16px;
	line-height: 154%;
	font-weight: 500;

	@media (min-width: ${(p): string => p.theme.breakpoints.md}) {
		font-size: 18px;
	}
`
