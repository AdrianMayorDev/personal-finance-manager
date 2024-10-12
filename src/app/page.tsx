import "./styles/main.scss";
import Button, { ButtonType } from "./components/Button/Button";
import SideMenu from "./layouts/SideMenu/SideMenu";
import SideMenuLayout from "./layouts/SideMenu";

export default function Home() {
	return (
		// <div>
		// 	<Button type={ButtonType.paginationButton} paginationVariant='Prev' label='Prev' />
		// 	<Button type={ButtonType.paginationButton} label='1' />
		// 	<Button type={ButtonType.paginationButton} label='2' active />
		// 	<Button type={ButtonType.paginationButton} label='1' />
		// 	<Button type={ButtonType.paginationButton} paginationVariant='Next' label='Next' />
		// </div>
		<SideMenuLayout />
	);
}
