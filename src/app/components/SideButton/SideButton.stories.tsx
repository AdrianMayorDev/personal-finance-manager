import { fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/react";
import SideButton from "./SideButton";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	title: "Components/Side Button",
	component: SideButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
} satisfies Meta<typeof SideButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {};

Hover.parameters = { pseudo: { hover: true } };

export const Active: Story = { args: { active: true } };
