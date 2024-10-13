import "./styles/main.scss";
import InputField from "./components/InputField/InputField";

export default function Home() {
	return (
		<InputField label='Label test' name='name' type='text' placeholder='test placeholder' helper helperText='Helper text' icon='icon' />
	);
}
