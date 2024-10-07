import styles from "./ButtonPrimary.module.scss";

const { primaryButton } = styles;

export interface ButtonPrimaryProps {
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const buttonPrimary = ({ label = "Placeholder", onClick }: ButtonPrimaryProps) => {
	return (
		<button className={primaryButton} onClick={onClick}>
			{label}
		</button>
	);
};

export default buttonPrimary;
