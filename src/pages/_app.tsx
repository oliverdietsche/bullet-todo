import type { AppProps } from 'next/app';
import React from 'react';
import { Footer, Header, HTMLHead } from '../components';
import { ConfigProvider, TaskProvider } from '../providers';
import { ThemeProvider } from '../theme';

/**
 * Overwrites default App and allows to add page-wide shared code
 * @param Component - The page component that gets rendered
 * @param pageProps - The props that belong to the page component
 */
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider>
			<TaskProvider>
				<ThemeProvider>
					<HTMLHead />
					<Header />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
			</TaskProvider>
		</ConfigProvider>
	);
}

export default MyApp;
