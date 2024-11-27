"use client";

import React, { useState, useRef } from "react";
import styles from "./DropdownSelect.module.scss";

const { dropDownContainer } = styles;

interface DropdownSelectProps {
	value?: string;
	placeholder?: string;
	options?: { value: string; label: string; used: boolean }[];
	handleOnChange?: (value: string) => void;
	activeIndex: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DropdownSelect = ({ options, handleOnChange, activeIndex, setActiveIndex }: DropdownSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef(null);

	const handleSelect = (selectedValue: string) => {
		if (handleOnChange) handleOnChange(selectedValue);
		setIsOpen(false);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (options) {
			if (e.key === "ArrowDown") {
				setActiveIndex((prevIndex) => Math.min(prevIndex + 1, options.length - 1));
			} else if (e.key === "ArrowUp") {
				setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
			} else if (e.key === "Enter" && activeIndex >= 0) {
				handleSelect(options[activeIndex].value);
			}
		}
	};

	return (
		<div
			ref={selectRef}
			role='listbox'
			aria-expanded={isOpen}
			aria-controls='dropdown-list'
			onKeyDown={handleKeyDown}
			onBlur={() => setIsOpen(false)}
			tabIndex={0}
			className={dropDownContainer}
			onClick={() => setIsOpen(!isOpen)}
		>
			{options && options[activeIndex]?.label}

			{isOpen && (
				<div className={styles.dropdownOptions}>
					{options?.map((option, index) => (
						<div
							key={option.value}
							className={`${styles.dropdownOption} ${index === activeIndex ? styles.active : ""}`}
							role='option'
							aria-selected={index === activeIndex}
							onClick={() => handleSelect(option.value)}
							onMouseEnter={() => setActiveIndex(index)}
						>
							<div className={styles.colorCircle} style={{ backgroundColor: option.value }}></div>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownSelect;
