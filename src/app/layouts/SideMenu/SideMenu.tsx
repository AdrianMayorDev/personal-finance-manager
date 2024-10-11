import SideButton from "@/app/components/SideButton/SideButton";
import styles from "./SideMenu.module.scss";
import SideLogo from "@/app/components/SideLogo/SideLogo";
import SideNavButton from "@/app/components/SideNavButton/SideNavButton";
import { ButtonType } from "@/app/components/SideButtonBaseHOC/SideButtonBaseHOC";

const { sideMenu, sideMenu_collapsed } = styles;

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

export interface ISideMenuProps {
	collapse: boolean;
	pathname: string;
	handleCollapse: () => void;
}

const SideMenu = ({ collapse, pathname, handleCollapse }: ISideMenuProps) => {
	const navStyles = `${sideMenu} ${collapse && sideMenu_collapsed}`;

	return (
		<nav className={navStyles}>
			<SideLogo collapse={collapse} />
			<ul>
				{navItems.map((item) => (
					<SideNavButton
						key={item.label}
						label={item.label}
						type={item.type}
						path={item.path}
						active={pathname === item.path}
						collapse={collapse}
					/>
				))}
			</ul>
			<SideButton type={ButtonType.minimizeButton} label='Minimize Menu' onClick={handleCollapse} collapse={collapse} />
		</nav>
	);
};

export default SideMenu;
