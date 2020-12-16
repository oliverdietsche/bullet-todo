import { withConfigProvider, withThemeProvider } from '../src/storybookProviders';

export const decorators = [withThemeProvider, withConfigProvider];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
