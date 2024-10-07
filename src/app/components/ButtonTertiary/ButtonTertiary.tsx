import styles from "./ButtonTertiary.module.scss";

const { tertiaryButton } = styles;

export interface ButtonTertiaryProps {
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const ButtonTertiary = ({ label = "Placeholder", onClick }: ButtonTertiaryProps) => {
	return (
		<button className={tertiaryButton} onClick={onClick}>
			{label}
		</button>
	);
};

export default ButtonTertiary;
