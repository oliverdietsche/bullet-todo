import { addDays, subDays, format, isToday } from 'date-fns';
import { IConfig, ITask, ITaskGroup } from '../interfaces';

export const filterVisibility = (taskConfig: IConfig['task']) => (task: ITask) => {
	return !(
		(!taskConfig.showMigratedFuture && task.status === 'MIGRATED-FUTURE') ||
		(!taskConfig.showMigratedPast && task.status === 'MIGRATED-PAST') ||
		(!taskConfig.showScheduled && task.status === 'SCHEDULED') ||
		(!taskConfig.showUnscheduled && task.status === 'UNSCHEDULED') ||
		(!taskConfig.showRemoved && task.status === 'REMOVED') ||
		(!taskConfig.showFinished && task.status === 'DONE')
	);
};
export const filterTasksWithTime = (task: ITask) => !task.time;
export const filterTasksWithoutTime = (task: ITask) => task.time;
export const filterTasksNotToday = (task: ITask) => task.time && isToday(task.time);
export const filterTasksOlderThanDays = (days: number) => (task: ITask) =>
	task.time && addDays(task.time, days).getTime() > Date.now();
export const filterTasksNewerThanDays = (days: number) => (task: ITask) =>
	task.time && subDays(task.time, days).getTime() < Date.now();

export const sortTasksByTimeDescending = (a: ITask, b: ITask) => (a.time && b.time && a.time < b.time ? 1 : -1);
export const sortTasksByTimeAscending = (a: ITask, b: ITask) => (a.time && b.time && a.time > b.time ? 1 : -1);
export const sortTasksByStateOpenFirst = (a: ITask) => (a.status !== 'OPEN' ? 1 : -1);

export const groupTasksByDay = (tasks: ITask[]) =>
	tasks.reduce<ITaskGroup[]>((accumulator, task) => {
		if (!task.time) return accumulator;
		const dateTitle = format(task.time, 'dd.MM.yyyy');
		const foundGroup = accumulator.find(({ title }) => title === dateTitle);
		if (foundGroup) {
			foundGroup.tasks.push(task);
			return accumulator;
		}
		accumulator.push({ title: dateTitle, tasks: [task] });
		return accumulator;
	}, []);
