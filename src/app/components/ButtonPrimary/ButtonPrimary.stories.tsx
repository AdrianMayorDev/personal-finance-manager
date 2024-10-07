import { fn } from "@storybook/test";

import { Meta, StoryObj } from "@storybook/react";
import ButtonPrimary from "./ButtonPrimary";

// export const ActionsData = {
// 	onArchiveTask: fn(),
// 	onPinTask: fn(),
// };

const meta: Meta = {
	title: "Components/Button Primary",
	component: ButtonPrimary,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {};

Hover.parameters = { pseudo: { hover: true } };
