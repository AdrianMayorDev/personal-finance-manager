import Link from "next/link";
import baseButtonHOC, { baseSideButtonProps } from "../baseSideButtonHOC/baseSideButtonHOC";

interface SideNavButtonProps extends baseSideButtonProps {
	className?: string;
}

const SideNavButton = ({ label, path = "", className }: SideNavButtonProps) => {
	return (
		<Link href={path} className={className}>
			<span>{label}</span>
		</Link>
	);
};

export default baseButtonHOC(SideNavButton);
