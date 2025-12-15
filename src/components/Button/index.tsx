import { ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonType = {
  size: "big" | "small";
  handler: () => void;
  children: ReactNode;
  disabled?: boolean;
};

export default function Button({
  size,
  handler,
  children,
  disabled,
}: ButtonType) {
  return (
    <>
      <button
        className={`${styles.button} ${styles[size]}`}
        onClick={handler}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
