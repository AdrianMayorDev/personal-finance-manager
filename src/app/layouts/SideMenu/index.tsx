"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideMenu from "./SideMenu";

const SideMenuLayout = () => {
	const pathname = usePathname();

	const [collapse, setCollapse] = useState(false);

	const handleCollapseClick = () => {
		setCollapse(!collapse);
	};

	return (
		<>
			<SideMenu collapse={collapse} pathname={pathname} handleCollapse={handleCollapseClick} />
		</>
	);
};

export default SideMenuLayout;
