import React from 'react';
import { ConfigProvider } from '../providers';

export const withConfigProvider = (Story) => (
	<ConfigProvider>
		<Story />
	</ConfigProvider>
);
