/** @jsxRuntime classic */
/** @jsx jsx */
import DateFnsUtils from '@date-io/date-fns';
import { css, jsx } from '@emotion/core';
import { Button, Dialog, DialogTitle, Grid } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from 'react';

export interface IDatePickerDialogProps {
	open: boolean;
	onClose: (cancelled: boolean, date: Date) => void;
}

export function DatePickerDialog({ open, onClose: handleClose }: IDatePickerDialogProps) {
	const [date, setDate] = useState(new Date());

	const handleDateChange = (newDate: Date | null) => {
		if (!newDate) return;
		const newDateWithTime = new Date();
		// Add current time to the selected date
		newDateWithTime.setFullYear(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
		setDate(newDateWithTime);
	};

	const onClose = () => handleClose(true, date);
	const handleCancel = () => handleClose(true, date);
	const handleSubmit = () => handleClose(false, date);

	return (
		<Dialog aria-labelledby="date-picker-dialog-title" open={open} onClose={onClose}>
			<Grid
				container
				spacing={2}
				css={css`
					width: 300px;
					margin: 16px;
				`}
			>
				<Grid item xs={12}>
					<DialogTitle id="date-picker-dialog-title">Choose date</DialogTitle>
				</Grid>
				<Grid item xs={12}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker
							autoOk
							fullWidth
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker"
							label="Date"
							value={date}
							onChange={handleDateChange}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={6}>
					<Button fullWidth variant="contained" color="secondary" onClick={handleCancel}>
						CANCEL
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
						SUBMIT
					</Button>
				</Grid>
			</Grid>
		</Dialog>
	);
}
