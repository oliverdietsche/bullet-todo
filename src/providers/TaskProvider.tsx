import React, { createContext, ReactNode, useContext } from 'react';
import { useHistory, useLocalStorage } from '../hooks';
import { ITask } from '../interfaces';

export interface ITaskContext {
	tasks: ITask[] | undefined | null;
	undo: () => boolean;
	removeTask: (id: ITask['id']) => void;
	finishTask: (id: ITask['id']) => void;
	scheduleTask: (id: ITask['id'], time: number) => void;
	unscheduleTask: (id: ITask['id']) => void;
	updateTaskText: (id: ITask['id'], newText: string) => void;
	addTask: (newTask: ITask) => void;
}

const TaskContext = createContext<ITaskContext>({
	tasks: [],
	undo: () => false,
	removeTask: () => {},
	finishTask: () => {},
	scheduleTask: () => {},
	unscheduleTask: () => {},
	updateTaskText: () => {},
	addTask: () => {},
});

export interface ITaskProviderProps {
	children: ReactNode;
}

export function TaskProvider({ children }: ITaskProviderProps) {
	const { data, setData } = useLocalStorage<ITask[]>('tasks', []);
	const { undo, pushToHistory } = useHistory<ITask[]>(data);

	const handleUndo = () => {
		const previousData = undo();
		if (!previousData) return false;
		setData(previousData);
		return true;
	};

	const removeTask = (id: ITask['id']) => {
		setData((currentData) => {
			pushToHistory();
			return currentData?.map((task) => {
				if (task.id !== id) return task;
				return { ...task, status: 'REMOVED' };
			});
		});
	};

	const finishTask = (id: ITask['id']) => {
		setData((currentData) => {
			pushToHistory();
			return currentData?.map((task) => {
				if (task.id !== id) return task;
				if (task.status !== 'OPEN') return task;
				return { ...task, status: 'DONE' };
			});
		});
	};

	const scheduleTask = (id: ITask['id'], time: number) => {
		const determineStatus = (taskTime: number | null) => {
			if (!taskTime) return 'SCHEDULED';
			return time > taskTime ? 'MIGRATED-FUTURE' : 'MIGRATED-PAST';
		};
		setData((currentData) => {
			pushToHistory();
			return currentData?.reduce<ITask[]>((accumulator, task) => {
				if (task.id !== id) return [...accumulator, task];
				if (task.status !== 'OPEN') return [...accumulator, task];
				return [
					...accumulator,
					{ ...task, status: determineStatus(task.time) },
					{
						id: Date.now().toString(),
						text: task.text,
						status: 'OPEN',
						time,
					},
				];
			}, []);
		});
	};

	const unscheduleTask = (id: ITask['id']) => {
		setData((currentData) => {
			pushToHistory();
			return currentData?.reduce<ITask[]>((accumulator, task) => {
				if (task.id !== id) return [...accumulator, task];
				if (task.status !== 'OPEN') return [...accumulator, task];
				if (!task.time) return accumulator;
				return [
					...accumulator,
					{ ...task, status: 'UNSCHEDULED' },
					{
						id: Date.now().toString(),
						text: task.text,
						status: 'OPEN',
						time: null,
					},
				];
			}, []);
		});
	};

	const updateTaskText = (id: ITask['id'], newText: string) => {
		setData((currentData) => {
			pushToHistory();
			return currentData?.map((task) => {
				if (task.id !== id) return task;
				return { ...task, text: newText };
			});
		});
	};

	const addTask = (newTask: ITask) => {
		setData((currentData) => {
			pushToHistory();
			if (!Array.isArray(currentData)) return currentData;
			return [...currentData, newTask];
		});
	};

	return (
		<TaskContext.Provider
			value={{
				tasks: data,
				undo: handleUndo,
				removeTask,
				finishTask,
				scheduleTask,
				unscheduleTask,
				updateTaskText,
				addTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}

export const useTask = () => useContext(TaskContext);
