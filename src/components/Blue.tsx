import { MutableRefObject } from "react";
import styles from "./Blue.module.css";

const Blue = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[4] = el;
      }}
    >
      Blue
    </div>
  );
};

export default Blue;
