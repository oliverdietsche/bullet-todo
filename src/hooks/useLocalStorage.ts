import { useEffect, useState } from 'react';

export const useLocalStorage = <TData>(key: string, defaultValue: TData) => {
	const [data, setData] = useState<TData>(defaultValue);

	useEffect(() => {
		const localData = window.localStorage.getItem(key);
		if (!localData) return;
		const parsedData = JSON.parse(localData) as TData;
		setData(parsedData);
	}, [key]);

	useEffect(() => {
		if (!data) return;
		window.localStorage.setItem(key, JSON.stringify(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return { data, setData };
};
