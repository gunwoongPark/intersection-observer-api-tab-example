import { ForwardedRef, forwardRef } from "react";
import styles from "./Blue.module.css";

const Blue = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Blue
    </div>
  );
});

export default Blue;
