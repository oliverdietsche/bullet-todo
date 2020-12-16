import React from 'react';
import { ThemeProvider } from '../theme';

export const withThemeProvider = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
);
