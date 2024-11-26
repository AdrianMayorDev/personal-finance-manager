import { fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/react";
import SideNavButton from "./SideNavButton";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	title: "Components/Side Nav Button",
	component: SideNavButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
} satisfies Meta<typeof SideNavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				component: "This button is using <a> tag to give navigation in the menu",
			},
		},
	},
};

export const Hover: Story = {
	parameters: {
		pseudo: { hover: true },
	},
};

export const Active: Story = {
	args: {
		active: true,
	},
};
