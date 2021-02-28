import styled from "styled-components"

export const Paragraph900 = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 24px;
	line-height: 142%;
	color: ${(p): string => p.theme.colors["accent-900"]};

	@media (min-width: ${(p): string => p.theme.breakpoints.sm}) {
		font-size: 28px;
	}

	@media (min-width: ${(p): string => p.theme.breakpoints.xl}) {
		font-size: 32px;
	}
`
