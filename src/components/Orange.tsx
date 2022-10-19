import { MutableRefObject } from "react";
import styles from "./Orange.module.css";

const Orange = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[1] = el;
      }}
    >
      Orange
    </div>
  );
};

export default Orange;
