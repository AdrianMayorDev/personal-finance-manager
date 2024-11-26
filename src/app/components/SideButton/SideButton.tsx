import baseButtonHOC, { ISideButtonBaseProps } from "../SideButtonBaseHOC/SideButtonBaseHOC";

interface SideButtonProps extends ISideButtonBaseProps {
	className?: string;
}

const SideButton = ({ label, onClick, className }: SideButtonProps) => {
	return (
		<button onClick={onClick} className={className}>
			<span>{label}</span>
		</button>
	);
};

export default baseButtonHOC(SideButton);
