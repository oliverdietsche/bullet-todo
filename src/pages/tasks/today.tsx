import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { DataWrapper, TaskGroup } from '../../components';
import { useTask } from '../../providers';

export default function TodayView() {
	const { tasks } = useTask();

	return (
		<DataWrapper data={tasks}>
			{(data) => {
				return (
					<Container maxWidth="md">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TaskGroup tasks={data} filtering="NOT_TODAY" sorting="TIME_DESC" />
							</Grid>
						</Grid>
					</Container>
				);
			}}
		</DataWrapper>
	);
}
