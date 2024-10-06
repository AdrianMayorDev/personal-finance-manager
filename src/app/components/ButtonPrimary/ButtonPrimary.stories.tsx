import { fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/react";
import ButtonPrimary from "./ButtonPrimary";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	component: ButtonPrimary,
};

export default meta;
type Story = StoryObj;

export const Primary = {
	component: ButtonPrimary,
	title: "testComponent",
	// tags: ["autodocs"],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	// args: {
	// 	...ActionsData,
	// },
};
