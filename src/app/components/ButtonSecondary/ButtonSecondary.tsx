import styles from "./ButtonSecondary.module.scss";

const { secondaryButton } = styles;

export interface ButtonSecondaryProps {
	/**Disable button if loading */
	loading: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const ButtonSecondary = ({ loading = false, label = "Placeholder", onClick }: ButtonSecondaryProps) => {
	return (
		<button className={secondaryButton} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default ButtonSecondary;
