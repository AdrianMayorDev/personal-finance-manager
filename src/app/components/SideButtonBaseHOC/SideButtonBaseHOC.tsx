import styles from "./SideButtonBaseHOC.module.scss";
import { ComponentType } from "react";

const { sideButton, sideButton_active, collapsed } = styles;

export enum ButtonType {
	defaultButton = "defaultButton",
	homeButton = "homeButton",
	potsButton = "potsButton",
	budgetsButton = "budgetsButton",
	recurringButton = "recurringButton",
	transactionsButton = "transactionsButton",
	minimizeButton = "minimizeButton",
}

export interface ISideButtonBaseProps {
	/** Loading */
	loading?: boolean;
	/** Active state */
	active?: boolean;
	/** Text that is going to contain the button */
	label?: string;
	/**  Optional click handler */
	onClick?: () => void;
	/** Button type */
	type?: ButtonType;
	/** Link path */
	path?: string;
	/** Collapse state */
	collapse?: boolean;
}

const SideButtonBaseHOC = <P extends ISideButtonBaseProps>(Component: ComponentType<ISideButtonBaseProps>) => {
	const WrappedComponent = ({
		active = false,
		type = ButtonType.defaultButton,
		label = "Placeholder",
		onClick,
		collapse = false,
		...rest
	}: P) => {
		const activeStyle = active ? `${sideButton} ${sideButton_active}` : sideButton;
		const collapsedStyle = collapse && collapsed;
		const typeClass = type ? styles[type] : "";

		const combinedClasses = `${activeStyle} ${typeClass} ${collapsedStyle}`;

		return <Component {...rest} label={label} className={combinedClasses} onClick={onClick} />;
	};

	return WrappedComponent;
};

export default SideButtonBaseHOC;
