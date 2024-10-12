import styles from "./Button.module.scss";

export enum ButtonType {
	primaryButton = "primaryButton",
	secondaryButton = "secondaryButton",
	tertiaryButton = "tertiaryButton",
	destroyButton = "destroyButton",
	paginationButton = "paginationButton",
}

export interface IButtonProps {
	/**Button type */
	type: ButtonType;
	/**Disable button if loading */
	loading?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
	/** Active state */
	active?: boolean;
	/** Pagination variant */
	paginationVariant?: "Prev" | "Next";
}

const Button = ({ type, loading = false, label = "Placeholder", onClick, active = false, paginationVariant }: IButtonProps) => {
	const paginationClassVariant = paginationVariant ? styles[`paginationIcon${paginationVariant}`] : "";

	const buttonClassName = `${styles[type]} ${active ? styles.activeButton : ""} ${paginationClassVariant}`;

	return (
		<button className={buttonClassName} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
