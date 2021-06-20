import React from "react";
import { default as Select } from "react-select";

const options = [
    {value: 'Python', label: "Python"},
    {value: "React", label: "React"},
    {value: "Node.js", label: "Node.js"}
]

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: "none",
        color: state.isFocused ? "var(--clr-neutral-900)" : "var(--clr-neutral-600)",
        boxShadow: state.isFocused ? "null" : "null",
        background: state.isFocused ? "var(--clr-accent-400)" : "var(--clr-neutral-700)",
        borderColor: state.isFocused ? "var(--clr-neutral-700)" : "var(--clr-neutral-900)",
        fontFamily: "Cairo",
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: "Cairo",
        background: "var(--clr-neutral-700)",
        color: "var(--clr-neutral-300)",
        border: "none",
        ':hover': {
            ...provided[":hover"],
            background: "var(--clr-accent-400)",
            color: "var(--clr-neutral-900)"
        }
    }),
    menuList: provided => ({
        ...provided,
        background: "var(--clr-neutral-700)"
    }),
    multiValue: provided => ({
        ...provided,
        background: "var(--clr-neutral-600)"
    })
}

export default function DropdownSelect ({value, onChange}) {
    return (
        <Select
            options={options}
            styles={customStyles}
            isMulti
            />

    )

}
