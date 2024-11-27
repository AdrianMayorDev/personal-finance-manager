import "./styles/main.scss";
import InputField from "./components/InputField/InputField";

const options = [
	{
		label: "Red",
		value: "#c94736",
	},
	{
		label: "Green",
		value: "#277C78",
	},
];

export default function Home() {
	return (
		<>
			<InputField
				label='Label test'
				name='name'
				type='select'
				placeholder='test placeholder'
				helper
				helperText='Helper text'
				icon='circlePrefix'
				options={options}
			/>
			<InputField
				label='Label test'
				name='name'
				type='text'
				placeholder='test placeholder'
				helper
				helperText='Helper text'
				icon='circlePrefix'
				options={options}
			/>
		</>
	);
}
