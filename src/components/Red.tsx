import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./Red.module.css";

const Red = (props: { refs: MutableRefObject<HTMLDivElement[] | null> }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!containerRef.current && !!props.refs) {
      props.refs.current[0] = containerRef;
    }
  }, [containerRef, props.refs]);

  return (
    <div className={styles.container} ref={containerRef}>
      Red
    </div>
  );
};

export default Red;
