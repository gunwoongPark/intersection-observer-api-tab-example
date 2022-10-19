import { MutableRefObject } from "react";
import styles from "./Red.module.css";

const Red = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[0] = el;
      }}
      id="RED"
    >
      Red
    </div>
  );
};

export default Red;
