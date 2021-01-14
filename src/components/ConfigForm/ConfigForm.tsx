import { css } from '@emotion/react';
import { Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useTaskConfig } from '../../providers';

export function ConfigForm() {
	const { updateTaskConfig, taskConfig } = useTaskConfig();

	const handleShowMigratedFutureChange = (event: ChangeEvent<HTMLInputElement>) =>
		updateTaskConfig({ showMigratedFuture: event.target.checked });

	const handleShowMigratedPastChange = (event: ChangeEvent<HTMLInputElement>) => {
		updateTaskConfig({ showMigratedPast: event.target.checked });
	};

	const handleShowScheduledChange = (event: ChangeEvent<HTMLInputElement>) => {
		updateTaskConfig({ showScheduled: event.target.checked });
	};

	const handleShowUnscheduledChange = (event: ChangeEvent<HTMLInputElement>) => {
		updateTaskConfig({ showUnscheduled: event.target.checked });
	};

	const handleShowRemovedChange = (event: ChangeEvent<HTMLInputElement>) => {
		updateTaskConfig({ showRemoved: event.target.checked });
	};

	const handleShowFinishedChange = (event: ChangeEvent<HTMLInputElement>) => {
		updateTaskConfig({ showFinished: event.target.checked });
	};

	return (
		<Grid
			container
			spacing={2}
			justify="center"
			css={css`
				margin-top: 40px;
			`}
		>
			<Grid item xs={10}>
				<Typography variant="h2" color="textPrimary">
					CONFIG
				</Typography>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={
						<Checkbox checked={taskConfig.showMigratedFuture} onChange={handleShowMigratedFutureChange} />
					}
					label={<Typography color="textPrimary">Show migrated to future</Typography>}
				/>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={<Checkbox checked={taskConfig.showMigratedPast} onChange={handleShowMigratedPastChange} />}
					label={<Typography color="textPrimary">Show migrated to past</Typography>}
				/>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={<Checkbox checked={taskConfig.showScheduled} onChange={handleShowScheduledChange} />}
					label={<Typography color="textPrimary">Show scheduled</Typography>}
				/>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={<Checkbox checked={taskConfig.showUnscheduled} onChange={handleShowUnscheduledChange} />}
					label={<Typography color="textPrimary">Show unscheduled</Typography>}
				/>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={<Checkbox checked={taskConfig.showRemoved} onChange={handleShowRemovedChange} />}
					label={<Typography color="textPrimary">Show removed</Typography>}
				/>
			</Grid>
			<Grid item xs={10}>
				<FormControlLabel
					control={<Checkbox checked={taskConfig.showFinished} onChange={handleShowFinishedChange} />}
					label={<Typography color="textPrimary">Show finished</Typography>}
				/>
			</Grid>
		</Grid>
	);
}
