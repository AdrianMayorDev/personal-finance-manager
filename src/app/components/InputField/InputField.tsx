"use client";

import DropdownSelect from "../DropdownSelect/DropdownSelect";
import React, { useState } from "react";
import styles from "./InputField.module.scss";

const { inputFieldContainer } = styles;

interface IInputFieldProps {
	type: "text" | "select";
	name: string;
	label: string;
	value?: string;
	placeholder?: string;
	options?: { value: string; label: string; used: boolean }[];
	handleOnChange?: () => void;
	helper?: boolean;
	helperText?: string;
	icon?: "icon" | "circlePrefix" | "prefix";
}

const InputField = ({ type, name, label, value, placeholder, handleOnChange, helper, helperText, icon, options }: IInputFieldProps) => {
	const [activeSelectIndex, setActiveSelectIndex] = useState(0);
	const iconTypeClass = icon ? styles[icon] : "";
	const circleColorClass = options ? { backgroundColor: options[activeSelectIndex].value } : {};

	const inputType =
		type === "text" ? (
			<input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={handleOnChange} />
		) : (
			<DropdownSelect
				options={options}
				handleOnChange={handleOnChange}
				activeIndex={activeSelectIndex}
				setActiveIndex={setActiveSelectIndex}
			/>
		);

	return (
		<div className={inputFieldContainer}>
			<label htmlFor={name}>{label}</label>
			<div>
				<div className={iconTypeClass} style={circleColorClass}></div>
				{inputType}
			</div>
			{helper && <span>{helperText}</span>}
		</div>
	);
};

export default InputField;
