import { ForwardedRef, forwardRef } from "react";
import styles from "./Purple.module.css";

const Purple = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Purple
    </div>
  );
});

export default Purple;
