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
}

const InputField = ({ type, name, label, value, placeholder, handleOnChange, helper, helperText }: IInputFieldProps) => {
	return (
		<div className={inputFieldContainer}>
			<label htmlFor={name}>{label}</label>
			<div>
				<div className={styles.icon}></div>
				<input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={handleOnChange} />
			</div>
			{helper && <span>{helperText}</span>}
		</div>
	);
};

export default InputField;
