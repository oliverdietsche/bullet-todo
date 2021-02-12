import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface IConfigContext {
	config: IConfig;
	setConfig: React.Dispatch<React.SetStateAction<IConfig>>;
}

const defaultConfig: IConfig = {
	task: {
		showMigratedFuture: true,
		showMigratedPast: true,
		showScheduled: true,
		showUnscheduled: true,
		showRemoved: true,
		showFinished: true,
	},
};

const ConfigContext = createContext<IConfigContext>({
	config: defaultConfig,
	setConfig: () => {},
});

export interface IConfigProviderProps {
	children: ReactNode;
}

export function ConfigProvider({ children }: IConfigProviderProps) {
	const [config, setConfig] = useState(defaultConfig);

	return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
}

export const useTaskConfig = () => {
	const { config, setConfig } = useContext(ConfigContext);
	const setTaskConfig = (taskConfig: IConfig['task']) => {
		setConfig((currentConfig) => ({
			...currentConfig,
			task: taskConfig,
		}));
	};
	const updateTaskConfig = (taskConfigUpdates: Partial<IConfig['task']>) => {
		setConfig((currentConfig) => ({
			...currentConfig,
			task: { ...currentConfig.task, ...taskConfigUpdates },
		}));
	};
	return { taskConfig: config.task, setTaskConfig, updateTaskConfig };
};
