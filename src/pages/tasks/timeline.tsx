import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { DataWrapper, TaskGroup } from '../../components';
import { useTask } from '../../providers';

export default function TimelineView() {
	const { tasks } = useTask();

	return (
		<DataWrapper data={tasks}>
			{(data) => {
				return (
					<Container maxWidth="md">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TaskGroup
									tasks={data}
									sorting="TIME_DESC"
									filtering="WITHOUT_TIME"
									grouping="BY_DAY"
									daysInPast={7}
								/>
							</Grid>
						</Grid>
					</Container>
				);
			}}
		</DataWrapper>
	);
}
