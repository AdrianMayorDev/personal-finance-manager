import styles from "./SideButton.module.scss";

const { sideButton, sideButton_active } = styles;

export enum ButtonType {
	defaultButton = "defaultButton",
	homeButton = "homeButton",
	potsButton = "potsButton",
	budgetsButton = "budgetsButton",
	recurringButton = "recurringButton",
	transactionsButton = "transactionsButton",
}

interface SideButtonProps {
	/**Disable button if loading */
	loading?: boolean;
	/** Active state */
	active?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
	/** Button type */
	type?: ButtonType;
}

const SideButton = ({
	loading = false,
	active = false,
	label = "Placeholder",
	onClick,
	type = ButtonType.defaultButton,
}: SideButtonProps) => {
	const currentStyle = active ? `${sideButton} ${sideButton_active}` : sideButton;

	const typeClass = styles[type];

	return (
		<button className={`${currentStyle} ${typeClass}`} disabled={loading} onClick={onClick}>
			<span>{label}</span>
		</button>
	);
};

export default SideButton;
