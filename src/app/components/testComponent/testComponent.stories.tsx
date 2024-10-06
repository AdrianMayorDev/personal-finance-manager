import { fn } from "@storybook/test";

import testComponent from "./testComponent";
import { Meta, StoryObj } from "@storybook/react";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	component: testComponent,
};

export default meta;
type Story = StoryObj;

export const adrian = {
	component: testComponent,
	title: "testComponent",
	// tags: ["autodocs"],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	// args: {
	// 	...ActionsData,
	// },
};
