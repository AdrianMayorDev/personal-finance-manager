// src/components/SideMenu/SideMenu.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import SideMenu, { ISideMenuProps } from "./SideMenu";

const meta: Meta<typeof SideMenu> = {
	title: "Layouts/SideMenu",
	component: SideMenu,
	tags: ["autodocs"],
	argTypes: {
		pathname: {
			control: {
				type: "text",
				options: ["/", "/transactions", "/budgets", "/pots", "/recurring"],
			},
		},
		collapse: {
			control: {
				type: "boolean",
			},
		},
	},
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {
	args: {
		collapse: false,
		pathname: "/budgets",
	},
	render: function Render(args: ISideMenuProps) {
		const [{ collapse }, updateArgs] = useArgs();

		const handleCollapse = () => {
			updateArgs({ collapse: !collapse });
		};

		return <SideMenu {...args} collapse={collapse} handleCollapse={handleCollapse} />;
	},
};
