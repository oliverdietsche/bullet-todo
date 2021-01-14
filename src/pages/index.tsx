import { css } from '@emotion/react';
import { Container, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

export default function HomePage() {
	return (
		<Container
			css={css`
				margin-top: 50px;
			`}
			maxWidth="md"
		>
			<Grid container spacing={5} justify="center">
				<Grid item xs={12}>
					<Typography variant="h2" color="textPrimary" align="center">
						Welcome to Bullet Todo!
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					css={css`
						display: flex;
						justify-content: center;
					`}
				>
					<Image src="/icon-512x512.png" alt="alt text" width="256" height="256" />
				</Grid>
			</Grid>
		</Container>
	);
}
