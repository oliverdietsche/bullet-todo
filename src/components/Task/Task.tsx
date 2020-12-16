/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { IconButton } from '@material-ui/core';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { TaskKey, TaskText } from '..';
import { ITask } from '../../interfaces';
import { useTask } from '../../providers';
import { useTheme } from '../../theme';
import { DatePickerDialog } from '../DatePickerDialog';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITaskProps extends Pick<ITask, 'id' | 'text' | 'status'> {}

export function Task({ id, text, status }: ITaskProps) {
	const theme = useTheme();
	const { updateTaskText, removeTask, unscheduleTask, scheduleTask, finishTask } = useTask();
	const [isEditActive, setIsEditActive] = useState(false);
	const [open, setOpen] = useState(false);

	const handleEditEnd = (newText: string) => {
		setIsEditActive(false);
		updateTaskText(id, newText)
	};

	const handleFinishClick = () => finishTask(id);
	const handleEditClick = () => setIsEditActive(true);
	const handleUnscheduleTask = () => unscheduleTask(id);
	const handleScheduleTask = () => setOpen(true);
	const handleScheduleTaskDialogClose = (cancelled: boolean, date: Date) => {
		setOpen(false);
		if (cancelled) return;
		scheduleTask(id, date.getTime());
	};
	const handleRemoveTask = () => removeTask(id);

	return (
		<div
			css={css`
				position: relative;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-items: flex-start;
				padding: 10px 24px;
				margin: 0 -24px;

				${status === 'OPEN' ? 'cursor: pointer;' : ''}

				:hover {
					background-color: ${theme.palette.background.paper};

					.task-actions {
						display: block;
						transition: 0.1s;
						opacity: 0.9;
					}
				}
			`}
		>
			<TaskKey status={status} />
			<TaskText currentText={text} status={status} isEditActive={isEditActive} onEditEnd={handleEditEnd} />
			<div
				className="task-actions"
				css={css`
					position: absolute;
					top: 0;
					right: 0;
					background-color: ${theme.palette.background.default};
					box-shadow: 0 0 20px 5px ${theme.palette.background.default};
					border-top-left-radius: 25px;
					border-bottom-left-radius: 25px;

					display: none;
					transition: 0;
					opacity: 0;
				`}
			>
				<IconButton aria-label="done" onClick={handleFinishClick}>
					<DoneIcon />
				</IconButton>
				<IconButton aria-label="edit" onClick={handleEditClick}>
					<EditIcon />
				</IconButton>
				<IconButton aria-label="unschedule" onClick={handleUnscheduleTask}>
					<AlarmOffIcon />
				</IconButton>
				<IconButton aria-label="schedule" onClick={handleScheduleTask}>
					<CalendarTodayIcon />
				</IconButton>
				<IconButton aria-label="remove" onClick={handleRemoveTask}>
					<DeleteIcon />
				</IconButton>
				<DatePickerDialog open={open} onClose={handleScheduleTaskDialogClose} />
			</div>
		</div>
	);
}
