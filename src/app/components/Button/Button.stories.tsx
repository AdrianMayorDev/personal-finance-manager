import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "./Button";

const meta: Meta = {
	title: "Components/Button ",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: [
				ButtonType.primaryButton,
				ButtonType.secondaryButton,
				ButtonType.tertiaryButton,
				ButtonType.destroyButton,
				ButtonType.paginationButton,
			],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { type: ButtonType.primaryButton } };

export const Secondary: Story = { args: { type: ButtonType.secondaryButton } };

export const Tertiary: Story = { args: { type: ButtonType.tertiaryButton } };

export const Destroy: Story = { args: { type: ButtonType.destroyButton } };

export const Pagination: Story = { args: { type: ButtonType.paginationButton, label: "1" } };
