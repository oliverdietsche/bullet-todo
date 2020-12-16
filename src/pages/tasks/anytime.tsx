import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { DataWrapper, TaskGroup } from '../../components';
import { useTask } from '../../providers';

export default function AnytimeView() {
	const { tasks } = useTask();

	return (
		<DataWrapper data={tasks}>
			{(data) => {
				return (
					<Container maxWidth="md">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TaskGroup tasks={data} filtering="WITH_TIME" sorting="OPEN_FIRST" />
							</Grid>
						</Grid>
					</Container>
				);
			}}
		</DataWrapper>
	);
}
