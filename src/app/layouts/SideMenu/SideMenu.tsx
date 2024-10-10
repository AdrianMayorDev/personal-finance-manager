"use client";

import SideButton from "@/app/components/SideButton/SideButton";
import styles from "./SideMenu.module.scss";
import SideLogo from "@/app/components/SideLogo/SideLogo";
import { usePathname } from "next/navigation";
import SideNavButton from "@/app/components/SideNavButton/SideNavButton";
import { ButtonType } from "@/app/components/baseSideButtonHOC/baseSideButtonHOC";

const { sideMenu } = styles;

const navItems = [
	{
		label: "Overview",
		type: ButtonType.homeButton,
		path: "/",
	},
	{
		label: "Transactions",
		type: ButtonType.transactionsButton,
		path: "/transactions",
	},
	{
		label: "Budgets",
		type: ButtonType.budgetsButton,
		path: "/budgets",
	},
	{
		label: "Pots",
		type: ButtonType.potsButton,
		path: "/pots",
	},
	{
		label: "Recurring bills",
		type: ButtonType.recurringButton,
		path: "recurring",
	},
];

const SideMenu = () => {
	const pathname = usePathname();

	return (
		<nav className={sideMenu}>
			<SideLogo />
			<ul>
				{navItems.map((item) => (
					<SideNavButton key={item.label} label={item.label} type={item.type} path={item.path} active={pathname === item.path} />
				))}
			</ul>
			<SideButton type={ButtonType.minimizeButton} label='Minimize Menu' />
		</nav>
	);
};

export default SideMenu;
