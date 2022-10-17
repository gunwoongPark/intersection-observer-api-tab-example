import { ForwardedRef, forwardRef } from "react";
import styles from "./Orange.module.css";

const Orange = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Orange
    </div>
  );
});

export default Orange;
