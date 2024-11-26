import SideButton from "@/app/components/SideButton/SideButton";
import styles from "./SideMenu.module.scss";
import SideLogo from "@/app/components/SideLogo/SideLogo";
import SideNavButton from "@/app/components/SideNavButton/SideNavButton";
import { SideButtonHOCType } from "@/app/components/SideButtonBaseHOC/SideButtonBaseHOC";

const { sideMenu, sideMenu_collapsed } = styles;

const navItems = [
	{
		label: "Overview",
		type: SideButtonHOCType.homeButton,
		path: "/",
	},
	{
		label: "Transactions",
		type: SideButtonHOCType.transactionsButton,
		path: "/transactions",
	},
	{
		label: "Budgets",
		type: SideButtonHOCType.budgetsButton,
		path: "/budgets",
	},
	{
		label: "Pots",
		type: SideButtonHOCType.potsButton,
		path: "/pots",
	},
	{
		label: "Recurring bills",
		type: SideButtonHOCType.recurringButton,
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
			<SideButton type={SideButtonHOCType.minimizeButton} label='Minimize Menu' onClick={handleCollapse} collapse={collapse} />
		</nav>
	);
};

export default SideMenu;
