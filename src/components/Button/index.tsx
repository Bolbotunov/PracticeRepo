import { ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonType = {
  size: "big" | "small";
  handler: () => void;
  children: ReactNode;
};

export default function Button({ size, handler, children }: ButtonType) {
  return (
    <>
      <button className={`${styles.button} ${styles[size]}`} onClick={handler}>
        {children}
      </button>
    </>
  );
}
