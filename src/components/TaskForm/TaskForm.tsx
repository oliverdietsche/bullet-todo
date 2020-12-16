/** @jsxRuntime classic */
/** @jsx jsx */
import DateFnsUtils from '@date-io/date-fns';
import { css, jsx } from '@emotion/core';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, useState } from 'react';
import { DataWrapper } from '..';
import { useTask } from '../../providers';

export function TaskForm() {
	const router = useRouter();
	const { tasks, addTask } = useTask();
	const [text, setText] = useState('');
	const [isScheduled, setIsScheduled] = useState(true);
	const [date, setDate] = useState<Date>(new Date());

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleIsScheduledChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsScheduled(event.target.checked);
	};

	const handleDateChange = (newDate: Date | null) => {
		if (newDate) setDate(newDate);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask({
			id: Date.now().toString(),
			text,
			status: 'OPEN',
			time: isScheduled ? date.getTime() : null,
		});
		router.push(isScheduled ? '/tasks/timeline' : '/tasks/anytime');
	};

	return (
		<DataWrapper data={tasks}>
			{() => {
				return (
					<form
						css={css`
							width: 100%;
						`}
					>
						<Grid container spacing={2} justify="center">
							<Grid item xs={10}>
								<TextField
									fullWidth
									id="task-text"
									label="Task"
									placeholder="Do this"
									onChange={handleTextChange}
								/>
							</Grid>
							<Grid item xs={10}>
								<FormControlLabel
									control={<Checkbox checked={isScheduled} onChange={handleIsScheduledChange} />}
									label={<Typography color="textPrimary">Scheduled</Typography>}
								/>
							</Grid>
							<Grid
								item
								xs={10}
								css={css`
									transition: 0.5s;
									opacity: ${isScheduled ? 1 : 0};
								`}
							>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										fullWidth
										disableToolbar
										autoOk
										variant="inline"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker"
										label="Date"
										value={date}
										disabled={!isScheduled}
										onChange={handleDateChange}
									/>
								</MuiPickersUtilsProvider>
							</Grid>
							<Grid item xs={10}>
								<Button
									fullWidth
									type="submit"
									variant="contained"
									color="primary"
									onClick={handleSubmit}
								>
									ADD
								</Button>
							</Grid>
						</Grid>
					</form>
				);
			}}
		</DataWrapper>
	);
}
