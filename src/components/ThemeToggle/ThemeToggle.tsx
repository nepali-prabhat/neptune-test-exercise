import { MoonStarFilled } from "../Icons/MoonStarFilled";
import { SunFilled } from "../Icons/SunFilled";
import styles from "./themeToggle.module.css";

export default function ThemeToggle(props: {
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <label className={styles.darkModeLabel} htmlFor="DarkModeToggle">
      <span>Dark Mode</span>
      <input
        checked={props.value}
        type="checkbox"
        id="DarkModeToggle"
        onClick={props.onToggle}
      />
      <div className={styles.toggle}>
        <SunFilled />
        <MoonStarFilled />
      </div>
    </label>
  );
}
