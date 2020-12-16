import React from 'react';
import { ExampleTasks } from '../../mocks';
import { ITaskGroupProps, TaskGroup } from './TaskGroup';

export default {
	title: 'Components / TaskGroup',
	component: TaskGroup,
	argTypes: {
		// in order to display as dropdown
		grouping: {
			control: {
				type: 'select',
				options: ['BY_DAY'],
			},
		},
	},
};

export const Interactive = (args: ITaskGroupProps) => <TaskGroup {...args} />;
const INTERACTIVE_PROPS: ITaskGroupProps = { tasks: ExampleTasks };
Interactive.args = INTERACTIVE_PROPS;
