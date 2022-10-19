import { MutableRefObject } from "react";
import styles from "./Green.module.css";

const Green = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[3] = el;
      }}
      id="GREEN"
    >
      Green
    </div>
  );
};

export default Green;
