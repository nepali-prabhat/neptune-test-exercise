"use client";
import styles from "./tokenValueInput.module.css";
import { ChangeEventHandler, FC } from "react";

const inputRegexPattern = "^[0-9]*[.,]?[0-9]*$";
const inputRegexExp = /^[0-9]*[.,]?[0-9]*$/;

export default function TokenValueInput(props: {
  name: string;
  value: string;
  onChange: (e: { name: string; value: string }) => void;
  Icon: FC;
  label: string;
}) {
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (inputRegexExp.test(value)) {
      props.onChange({ name: props.name, value: e.target.value });
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={`${props.name}-inp`} className="center">
        <props.Icon />
        <span>{props.label}</span>
      </label>
      <input
        id={`${props.name}-inp`}
        name={props.name}
        value={props.value}
        onChange={handleOnChange}
        pattern={inputRegexPattern}
        placeholder="0.00"
        type="text"
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
    </div>
  );
}
