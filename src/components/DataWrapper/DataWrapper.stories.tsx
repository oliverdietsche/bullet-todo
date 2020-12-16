import React from 'react';
import { ExampleTasks } from '../../mocks';
import { TaskGroup } from '../TaskGroup';
import { DataWrapper } from './DataWrapper';

export default {
	title: 'Components / DataWrapper',
	component: DataWrapper,
};

export const Loading = () => <DataWrapper data={undefined}>{() => null}</DataWrapper>;
export const Null = () => <DataWrapper data={null}>{() => null}</DataWrapper>;
export const Valid = () => <DataWrapper data={ExampleTasks}>{(data) => <TaskGroup tasks={data} />}</DataWrapper>;
