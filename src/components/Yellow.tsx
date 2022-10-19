import { MutableRefObject } from "react";
import styles from "./Yellow.module.css";

const Yellow = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[2] = el;
      }}
      id="YELLOW"
    >
      Yellow
    </div>
  );
};

export default Yellow;
