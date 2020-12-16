import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { ConfigForm } from '../components';

export default function ConfigPage() {
	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ConfigForm />
				</Grid>
			</Grid>
		</Container>
	);
}
