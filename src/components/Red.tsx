import { ForwardedRef, forwardRef } from "react";
import styles from "./Red.module.css";

const Red = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Red
    </div>
  );
});

export default Red;
