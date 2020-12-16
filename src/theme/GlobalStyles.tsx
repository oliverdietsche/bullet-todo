/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { useTheme } from './ThemeProvider';

export function GlobalStyles() {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				body {
					background: ${theme.palette.background.default};
					margin: 0;
				}

				a {
					text-decoration: none;
				}
			`}
		/>
	);
}
