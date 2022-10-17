import { ForwardedRef, forwardRef } from "react";
import styles from "./Green.module.css";

const Green = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Green
    </div>
  );
});

export default Green;
