import "./styles/main.scss";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import SideButton, { ButtonType } from "./components/SideButton/SideButton";

export default function Home() {
	return (
		<div>
			<SideButton type={ButtonType.homeButton} label='Overview' />
			<SideButton type={ButtonType.transactionsButton} label='Transactions' />
			<SideButton type={ButtonType.budgetsButton} label='Budgets' />
			<SideButton type={ButtonType.potsButton} label='Pots' active />
			<SideButton type={ButtonType.recurringButton} label='Recurring bills' />
		</div>
	);
}
