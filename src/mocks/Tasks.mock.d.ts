export const ExampleTasks: ITask[] = [
	{
		id: '1',
		text: 'Task 1',
		status: 'OPEN',
		time: Date.now() + 11,
	},
	{
		id: '2',
		text: 'Task 2',
		status: 'OPEN',
		time: Date.now() + 22,
	},
	{
		id: '3',
		text:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		status: 'OPEN',
		time: Date.now() + 33,
	},
	{
		id: '4',
		text: 'Task 4',
		status: 'DONE',
		time: Date.now() + 44,
	},
	{
		id: '5',
		text: 'Task 5',
		status: 'REMOVED',
		time: Date.now() + 55,
	},
	{
		id: '6.1',
		text: 'Task 6',
		status: 'MIGRATED-FUTURE',
		time: Date.now() + 61,
	},
	{
		id: '6.2',
		text: 'Task 6',
		status: 'MIGRATED-PAST',
		time: Date.now() + 62,
	},
	{
		id: '7',
		text: 'Task 7',
		status: 'SCHEDULED',
		time: Date.now() + 77,
	},
	{
		id: '8',
		text: 'Task 8',
		status: 'UNSCHEDULED',
		time: Date.now() + 88,
	},
	{
		id: '9',
		text: 'Task 9',
		status: 'OPEN',
		time: null,
	},
	{
		id: '10',
		text: 'Task 10',
		status: 'OPEN',
		time: null,
	},

	{
		id: '11',
		text: 'Task 11',
		status: 'OPEN',
		time: Date.now() - 25 * 60 * 60 * 1000 + 11,
	},

	{
		id: '12',
		text: 'Task 12',
		status: 'OPEN',
		time: Date.now() - 28 * 60 * 60 * 1000 + 12,
	},

	{
		id: '13',
		text: 'Task 13',
		status: 'OPEN',
		time: Date.now() - 100 * 60 * 60 * 1000 + 13,
	},
];
