import styles from "./ButtonDestroy.module.scss";

const { destroyButton } = styles;

export interface IButtonDestroyProps {
	/**Disable button if loading */
	loading?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const ButtonDestroy = ({ loading = false, label = "Placeholder", onClick }: IButtonDestroyProps) => {
	return (
		<button className={destroyButton} disabled={loading} onClick={onClick}>
			{label}
		</button>
	);
};

export default ButtonDestroy;
