import { useRef } from 'react';
import { cloneObject } from '../services';

export const useHistory = <TData>(data: TData): { undo: () => TData | null; pushToHistory: () => void } => {
	const history = useRef<TData[]>([]);
	const didUndo = useRef(false);

	const undo = () => {
		const previousTasks = history.current.pop();
		if (!previousTasks) return null;
		didUndo.current = true;
		return previousTasks;
	};

	const pushToHistory = () => {
		// Object needs to be cloned so future changes don't affect history
		history.current.push(cloneObject(data));
	};

	return { undo, pushToHistory };
};
