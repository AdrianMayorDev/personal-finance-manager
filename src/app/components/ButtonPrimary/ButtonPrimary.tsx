import styles from "./ButtonPrimary.module.scss";

const { primaryButton } = styles;

export interface ButtonPrimaryProps {
	/**Disable button if loading */
	loading?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const buttonPrimary = ({ loading = false, label = "Placeholder", onClick }: ButtonPrimaryProps) => {
	return (
		<button className={primaryButton} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default buttonPrimary;
