import styles from "./BaseCard.module.scss";

const { baseCard } = styles;

import { ReactNode } from "react";

const BaseCard = ({ children }: { children: ReactNode }) => {
	return <div className={baseCard}>{children} Tenemos que poner relleno</div>;
};

export default BaseCard;
