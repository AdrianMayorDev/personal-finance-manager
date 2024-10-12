import styles from "./Button.module.scss";

export enum ButtonType {
	primaryButton = "primaryButton",
	secondaryButton = "secondaryButton",
	tertiaryButton = "tertiaryButton",
	destroyButton = "destroyButton",
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
}

const Button = ({ type, loading = false, label = "Placeholder", onClick }: IButtonProps) => {
	const buttonClassName = styles[type];
	return (
		<button className={buttonClassName} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
