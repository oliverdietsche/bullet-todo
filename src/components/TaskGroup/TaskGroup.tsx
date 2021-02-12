import { Fragment } from 'react';
import { Heading, Task } from '..';
import { useTaskConfig } from '../../providers';
import {
	filterTasksNewerThanDays,
	filterTasksNotToday,
	filterTasksOlderThanDays,
	filterTasksWithoutTime,
	filterTasksWithTime,
	filterVisibility,
	groupTasksByDay,
	sortTasksByStateOpenFirst,
	sortTasksByTimeAscending,
	sortTasksByTimeDescending,
} from '../../services';

export interface ITaskGroupProps {
	tasks: ITask[];
	filtering?: 'WITH_TIME' | 'WITHOUT_TIME' | 'NOT_TODAY';
	sorting?: 'TIME_ASC' | 'TIME_DESC' | 'OPEN_FIRST';
	grouping?: 'BY_DAY';
	daysInPast?: number;
	daysInFuture?: number;
}

export function TaskGroup({ tasks, filtering, sorting, grouping, daysInPast, daysInFuture }: ITaskGroupProps) {
	const { taskConfig } = useTaskConfig();

	const skipFilter = (task: ITask) => task;
	const skipSorting = () => 0;
	const buildFiltering = () => {
		if (filtering === 'WITH_TIME') return filterTasksWithTime;
		if (filtering === 'WITHOUT_TIME') return filterTasksWithoutTime;
		if (filtering === 'NOT_TODAY') return filterTasksNotToday;
		return skipFilter;
	};
	const buildSorting = () => {
		if (sorting === 'TIME_ASC') return sortTasksByTimeAscending;
		if (sorting === 'TIME_DESC') return sortTasksByTimeDescending;
		if (sorting === 'OPEN_FIRST') return sortTasksByStateOpenFirst;
		return skipSorting;
	};
	const buildGroup = (convertedTasks: ITask[]) => {
		if (grouping === 'BY_DAY') return groupTasksByDay(convertedTasks);
		return [{ title: '', tasks: convertedTasks }];
	};

	return (
		<Fragment>
			{buildGroup(
				tasks
					.filter(filterVisibility(taskConfig))
					.filter(daysInPast ? filterTasksOlderThanDays(daysInPast) : skipFilter)
					.filter(daysInFuture ? filterTasksNewerThanDays(daysInFuture) : skipFilter)
					.filter(buildFiltering())
					.sort(buildSorting())
			).map((group) => (
				<Fragment key={`group-${group.title}`}>
					{group.title ? <Heading>{group.title}</Heading> : null}
					{group.tasks.map((task) => (
						<Fragment key={`task-${task.id}`}>
							<Task id={task.id} text={task.text} status={task.status} />
						</Fragment>
					))}
				</Fragment>
			))}
		</Fragment>
	);
}
