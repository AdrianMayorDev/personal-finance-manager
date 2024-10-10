import baseButtonHOC, { baseSideButtonProps } from "../baseSideButtonHOC/baseSideButtonHOC";

interface SideButtonProps extends baseSideButtonProps {
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
