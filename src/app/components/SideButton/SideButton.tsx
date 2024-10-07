import styles from "./SideButton.module.scss";

const { sideButton, sideButton_active } = styles;
console.log(styles);
export interface SideButtonProps {
	/** Active state */
	active?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
}

const SideButton = ({ active = false, label = "Placeholder", onClick }: SideButtonProps) => {
	const currentStyle = active ? `${sideButton} ${sideButton_active}` : sideButton;

	return (
		<button className={currentStyle} onClick={onClick}>
			{label}
		</button>
	);
};

export default SideButton;
