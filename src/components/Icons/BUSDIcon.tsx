import styles from "./icons.module.css";

const rate = 25;
const width = 336.41 / rate;
const height = 337.42 / rate;

export function BUSDIcon() {
  return (
    <i id="MoonStarFilled" data-size="md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 336.41 337.42"
        width={width}
        height={height}
        className={styles.busdIcon}
      >
        <title>BUSD Icon</title>
        <path d="m168.2.71 41.5 42.5-104.5 104.5-41.5-41.5ZM231.2 63.71l41.5 42.5-167.5 167.5-41.5-41.5ZM42.2 126.71l41.5 42.5-41.5 41.5-41.5-41.5ZM294.2 126.71l41.5 42.5-167.5 167.5-41.5-41.5Z" />
      </svg>
    </i>
  );
}
