import Link from "next/link";
import baseButtonHOC, { ISideButtonBaseProps } from "../SideButtonBaseHOC/SideButtonBaseHOC";

interface SideNavButtonProps extends ISideButtonBaseProps {
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
