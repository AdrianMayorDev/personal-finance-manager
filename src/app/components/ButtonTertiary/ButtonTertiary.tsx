import styles from "./ButtonTertiary.module.scss";

const { tertiaryButton } = styles;

export interface ButtonTertiaryProps {
	/**Disable button if loading */
	loading: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const ButtonTertiary = ({ loading = false, label = "Placeholder", onClick }: ButtonTertiaryProps) => {
	return (
		<button className={tertiaryButton} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default ButtonTertiary;
