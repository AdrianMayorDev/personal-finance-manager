import styles from "./SideLogo.module.scss";

const { sideLogo, logoCollapsed } = styles;

interface ISideLogoProps {
	/** Collapsed menu */
	collapse?: boolean;
}

const SideLogo = ({ collapse = false }: ISideLogoProps) => {
	const currentCollapse = collapse ? logoCollapsed : "";

	return <a href='/' className={`${sideLogo} ${currentCollapse}`}></a>;
};

export default SideLogo;
