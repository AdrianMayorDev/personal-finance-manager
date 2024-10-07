import styles from "./ButtonDestroy.module.scss";

const { destroyButton } = styles;

export interface ButtonDestroyProps {
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const ButtonDestroy = ({ label = "Placeholder", onClick }: ButtonDestroyProps) => {
	return (
		<button className={destroyButton} onClick={onClick}>
			{label}
		</button>
	);
};

export default ButtonDestroy;
