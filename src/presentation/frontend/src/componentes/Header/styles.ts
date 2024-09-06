import styled from "styled-components";
import { theme } from "../../styles/theme";

export const S = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		--max-width: 680px;
		width: min(var(--max-width), 100% - var(--px-lg) * 2);
		margin-inline: auto;
	`,
	Main: styled.div`
		padding-block: ${theme.main.spacing.y.base};
		@media (width >= ${theme.device.lg}) {
			--max-width: 1050px;
		}
	`,
};
