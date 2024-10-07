import styles from "./ButtonSecondary.module.scss";

const { secondaryButton } = styles;

export interface ButtonSecondaryProps {
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const buttonSecondary = ({ label = "Placeholder", onClick }: ButtonSecondaryProps) => {
	return (
		<button className={secondaryButton} onClick={onClick}>
			{label}
		</button>
	);
};

export default buttonSecondary;
