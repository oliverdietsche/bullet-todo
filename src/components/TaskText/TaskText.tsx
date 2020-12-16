/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { TextField, Typography } from '@material-ui/core';
import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from 'react';
import { ITask } from '../../interfaces';
import { useTheme } from '../../theme';

export interface ITaskTextProps extends Pick<ITask, 'status'> {
	currentText: ITask['text'];
	isEditActive?: boolean;
	onEditEnd?: (newText: string) => void;
}

export function TaskText({ currentText, status, isEditActive, onEditEnd: handleEditEnd }: ITaskTextProps) {
	const theme = useTheme();
	const [text, setText] = useState(currentText);

	const styles = css`
		display: inline;
		margin: 0;

		line-height: 30px;
		color: ${theme.palette.text.primary};
		//user-select: none;
	`;

	if (!isEditActive)
		return (
			<div>
				<Typography
					css={[
						styles,
						css`
							background-image: linear-gradient(currentColor, currentColor);
							background-position: 0% 50%;
							background-repeat: no-repeat;
							background-size: 0% 2px;
							transition: background-size 0.3s;

							// Striketrough animation
							${status === 'REMOVED' ? 'background-size: 100% 2px;' : ''}
						`,
					]}
				>
					{text}
				</Typography>
			</div>
		);

	const handleBlur = () => {
		if (!handleEditEnd) return;
		handleEditEnd(currentText);
		setText(currentText);
	};
	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (!handleEditEnd) return;
		if (event.key !== 'Enter') return;
		handleEditEnd(text);
		event.preventDefault();
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.target.value) setText(event.target.value);
	};
	const handleFocus = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		// Move cursor to end of text
		event.target.setSelectionRange(text.length, text.length);
	};
	return (
		<TextField
			multiline
			fullWidth
			autoFocus={isEditActive}
			type="text"
			css={[
				styles,
				css`
					//white-space: pre-wrap;
					${status === 'REMOVED' ? 'text-decoration: line-through;' : ''}

					.MuiInput-root {
						padding-top: 0;
					}

					.MuiInputBase-input {
						line-height: 30px;
					}
				`,
			]}
			value={text}
			onBlur={handleBlur}
			onKeyDown={handleKeyDown}
			onChange={handleChange}
			onFocus={handleFocus}
		/>
	);
}
