import { MutableRefObject } from "react";
import styles from "./Purple.module.css";

const Purple = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[6] = el;
      }}
    >
      Purple
    </div>
  );
};

export default Purple;
