import styles from "./InputField.module.scss";

const { inputFieldContainer } = styles;

interface IInputFieldProps {
	type: "text" | "select";
	name: string;
	label: string;
	value?: string;
	placeholder?: string;
	options?: { value: string; label: string }[];
	handleOnChange?: () => void;
	helper?: boolean;
	helperText?: string;
	icon?: "icon" | "circleIcon";
}

const InputField = ({ type, name, label, value, placeholder, handleOnChange, helper, helperText, icon, options }: IInputFieldProps) => {
	const iconTypeClass = icon ? styles[icon] : "";

	const inputType =
		type === "text" ? (
			<input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={handleOnChange} />
		) : (
			<select id={name} name={name} value={value} onChange={handleOnChange}>
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		);

	return (
		<div className={inputFieldContainer}>
			<label htmlFor={name}>{label}</label>
			<div>
				<div className={iconTypeClass}></div>
				{inputType}
			</div>
			{helper && <span>{helperText}</span>}
		</div>
	);
};

export default InputField;
