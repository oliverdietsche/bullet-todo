import React from 'react';
import { DatePickerDialog, IDatePickerDialogProps } from './DatePickerDialog';

export default {
	title: 'Components / DatePickerDialog',
	component: DatePickerDialog,
};

export const Interactive = (args: IDatePickerDialogProps) => <DatePickerDialog {...args} />;
const INTERACTIVE_PROPS: Pick<IDatePickerDialogProps, 'open'> = { open: true };
Interactive.args = INTERACTIVE_PROPS;
