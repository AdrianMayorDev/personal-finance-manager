// src/components/SideMenu/SideMenu.stories.tsx
import { Meta, Story } from "@storybook/react";
import { useState, useEffect } from "react";
import SideMenu, { ISideMenuProps } from "./SideMenu";

export default {
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
} as Meta<ISideMenuProps>;

const Template: Story<ISideMenuProps> = (args: ISideMenuProps) => {
	const [collapse, setCollapse] = useState(args.collapse);

	useEffect(() => {
		setCollapse(args.collapse);
	}, [args.collapse]);

	const handleCollapse = () => {
		setCollapse((prev) => !prev);
	};

	return <SideMenu {...args} collapse={collapse} handleCollapse={handleCollapse} />;
};

export const Default = Template.bind({});
Default.args = {
	collapse: false,
	pathname: "/budgets",
};
