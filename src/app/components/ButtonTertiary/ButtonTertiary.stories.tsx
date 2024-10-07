import { fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/react";
import ButtonTertiary from "./ButtonTertiary";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	title: "Components/Button Tertiary",
	component: ButtonTertiary,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
} satisfies Meta<typeof ButtonTertiary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {};

Hover.parameters = { pseudo: { hover: true } };
