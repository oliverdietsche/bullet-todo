import React from 'react';
import { ITaskKeyProps, TaskKey } from './TaskKey';

export default {
	title: 'Components / TaskKey',
	component: TaskKey,
};

export const Interactive = (args: ITaskKeyProps) => <TaskKey {...args} />;
const INTERACTIVE_PROPS: ITaskKeyProps = { status: 'OPEN' };
Interactive.args = INTERACTIVE_PROPS;

export const Open = () => <TaskKey status="OPEN" />;
export const Done = () => <TaskKey status="DONE" />;
export const Removed = () => <TaskKey status="REMOVED" />;
export const MigratedFuture = () => <TaskKey status="MIGRATED-FUTURE" />;
export const MigratedPast = () => <TaskKey status="MIGRATED-PAST" />;
export const Scheduled = () => <TaskKey status="SCHEDULED" />;
export const Unscheduled = () => <TaskKey status="UNSCHEDULED" />;
