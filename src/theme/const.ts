import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

export const THEME: Theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				light: '#67daff',
				main: '#03a9f4',
				dark: '#007ac1',
				contrastText: '#000000',
			},
			secondary: {
				light: '#ffff72',
				main: '#ffeb3b',
				dark: '#c8b900',
				contrastText: '#000000',
			},
		},
		typography: {
			fontSize: 16,
		},
		overrides: {
			MuiInputBase: {
				input: {
					'&:-webkit-autofill': {
						transitionDelay: '99999s',
						transitionProperty: 'background-color, color',
					},
				},
			},
		},
	})
);

export const SPACING = '10px';
export const HEADER_HEIGHT = '0px';
export const FOOTER_HEIGHT = '56px';
export const CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${SPACING} - ${FOOTER_HEIGHT} - ${SPACING})`;
