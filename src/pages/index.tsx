/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Container, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import { CONTENT_HEIGHT } from '../theme';

export default function HomePage() {
	return (
		<Container
			css={css`
				height: ${CONTENT_HEIGHT};
				display: flex;
				align-items: center;
			`}
			maxWidth="md"
		>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<Typography variant="h2" color="textPrimary" align="center">
						Welcome to Bullet Todo!
					</Typography>
				</Grid>
				<Image src="/icon-512x512.png" alt="alt text" width="256" height="256" />
			</Grid>
		</Container>
	);
}
