/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { ReactNode } from 'react';
import { useTheme } from '../../theme';

export interface IHeadingProps {
	children: ReactNode;
}

export function Heading({ children }: IHeadingProps) {
	const theme = useTheme();

	return (
		<div
			css={css`
				position: relative;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;

				::after {
					content: '';
					display: block;
					position: absolute;

					width: 100vw;
					height: 2px;
					top: 22px;
					background: ${theme.palette.text.hint};
					z-index: -1;
				}
			`}
		>
			<Typography
				css={css`
					margin: 0;
					padding: 10px;
					background: ${theme.palette.background.default};
					color: ${theme.palette.text.primary};
				`}
			>
				{children}
			</Typography>
		</div>
	);
}
