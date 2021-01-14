import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';
import { Fragment, ReactNode } from 'react';
import { useTheme } from '../../theme';

export interface IDataWrapperProps<TData> {
	data: TData | null | undefined;
	children: (data: TData) => ReactNode;
}

export function DataWrapper<TData>({ data, children: render }: IDataWrapperProps<TData>) {
	const theme = useTheme();
	const textStyles = css`
		color: ${theme.palette.text.primary};
	`;

	if (data === undefined) return <Typography css={textStyles}>Loading...</Typography>;
	if (data === null) return <Typography css={textStyles}>It's null...</Typography>;
	return <Fragment>{render(data)}</Fragment>;
}
