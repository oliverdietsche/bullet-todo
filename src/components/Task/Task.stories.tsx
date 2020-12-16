import React from 'react';
import { ITaskProps, Task } from './Task';

export default {
	title: 'Components / Task',
	component: Task,
};

export const Interactive = (args: ITaskProps) => <Task {...args} />;
const INTERACTIVE_PROPS: ITaskProps = {
	id: '1',
	text: 'Do homework',
	status: 'OPEN',
};
Interactive.args = INTERACTIVE_PROPS;

export const Open = () => <Task id="1" text="Do homework" status="OPEN" />;
export const Done = () => <Task id="1" text="Do homework" status="DONE" />;
export const Removed = () => <Task id="1" text="Do homework" status="REMOVED" />;
export const MigratedFuture = () => <Task id="1" text="Do homework" status="MIGRATED-FUTURE" />;
export const MigratedPast = () => <Task id="1" text="Do homework" status="MIGRATED-PAST" />;
export const Scheduled = () => <Task id="1" text="Do homework" status="SCHEDULED" />;
export const Unscheduled = () => <Task id="1" text="Do homework" status="UNSCHEDULED" />;
export const LongText = () => (
	<Task
	id="1"
		text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
		status="OPEN"
	/>
);
