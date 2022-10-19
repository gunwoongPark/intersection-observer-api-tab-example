import styles from "./Orange.module.css";

const Orange = (props: { refs: any }) => {
  return (
    <div
      className={styles.container}
      ref={(el) => (props.refs.current[1] = el)}
    >
      Orange
    </div>
  );
};

export default Orange;
