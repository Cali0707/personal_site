import React from "react";
import MultiSelect from "react-multi-select-component";
import './DropdownSelect.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircle} from "@fortawesome/free-solid-svg-icons";

function DropdownItem ({checked, option, onClick, disabled}) {
    return (
        <div className={`dropdown-item ${disabled && "disabled"}`} onClick={onClick}>
            {checked ? <FontAwesomeIcon icon={faCheckCircle}/> : <FontAwesomeIcon icon={faCircle} />}
            <span>{option.label}</span>
        </div>
    );
}

const optionStrings = {
  "allItemsAreSelected": "All items are selected.",
  "clearSearch": "Clear Search",
  "noOptions": "No options",
  "search": "Search",
  "selectAll": "Select All",
  "selectSomeItems": "Select..."
}


export default function DropdownSelect ({options, value, onChanged, strings}) {
    const overrideStrings = {...optionStrings, ...strings}
    return (
        <MultiSelect
            options={options}
            value={value}
            labelledBy={"Select"}
            onChange={onChanged}
            disableSearch
            ItemRenderer={DropdownItem}
            overrideStrings={overrideStrings}
        />

    )
}
