import { MutableRefObject } from "react";
import styles from "./Navy.module.css";

const Navy = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[5] = el;
      }}
      id="NAVY"
    >
      Navy
    </div>
  );
};

export default Navy;
