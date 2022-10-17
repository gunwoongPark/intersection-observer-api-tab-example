import { ForwardedRef, forwardRef } from "react";
import styles from "./Navy.module.css";

const Navy = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Navy
    </div>
  );
});

export default Navy;
