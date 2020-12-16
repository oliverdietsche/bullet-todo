import React from 'react';
import { ITaskTextProps, TaskText } from './TaskText';

export default {
	title: 'Components / TaskText',
	component: TaskText,
};

export const Interactive = (args: ITaskTextProps) => <TaskText {...args} />;
const INTERACTIVE_PROPS: ITaskTextProps = {
	currentText: 'Example text',
	status: 'DONE',
};
Interactive.args = INTERACTIVE_PROPS;
