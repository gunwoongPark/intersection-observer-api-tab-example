import { ForwardedRef, forwardRef } from "react";
import styles from "./Yellow.module.css";

const Yellow = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.container} ref={ref}>
      Yellow
    </div>
  );
});

export default Yellow;
