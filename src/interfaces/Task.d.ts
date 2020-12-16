import { TStatus } from '../types';

export interface ITask {
	id: string;
	text: string;
	status: TStatus;
	time: number | null;
}
