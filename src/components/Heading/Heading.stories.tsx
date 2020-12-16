import React from 'react';
import { Heading, IHeadingProps } from './Heading';

export default {
	title: 'Components / Heading',
	component: Heading,
};

export const Short = (args: IHeadingProps) => <Heading>{args.children}</Heading>;
Short.args = { children: 'Hi' };

export const Normal = (args: IHeadingProps) => <Heading>{args.children}</Heading>;
Normal.args = { children: '15.11.2001' };

export const SemiLong = (args: IHeadingProps) => <Heading>{args.children}</Heading>;
SemiLong.args = { children: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' };

export const VeryLong = (args: IHeadingProps) => <Heading>{args.children}</Heading>;
VeryLong.args = {
	children:
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};
