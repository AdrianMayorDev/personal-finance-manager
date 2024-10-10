import SideButton, { ButtonType } from "@/app/components/SideButton/SideButton";

import styles from "./SideMenu.module.scss";
import SideLogo from "@/app/components/SideLogo/SideLogo";

const { sideMenu } = styles;

const SideMenu = () => {
	return (
		<nav id='testNav' className={sideMenu}>
			<SideLogo />
			<ul>
				<SideButton type={ButtonType.homeButton} label='Overview' />
				<SideButton type={ButtonType.transactionsButton} label='Transactions' />
				<SideButton type={ButtonType.budgetsButton} label='Budgets' />
				<SideButton type={ButtonType.potsButton} label='Pots' active />
				<SideButton type={ButtonType.recurringButton} label='Recurring bills' />
			</ul>
			<button>test</button>
		</nav>
	);
};

export default SideMenu;
