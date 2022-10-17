import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.tab_container}>
        <li className={styles.tab_red}>RED</li>
        <li className={styles.tab_orange}>ORANGE</li>
        <li className={styles.tab_yellow}>YELLOW</li>
        <li className={styles.tab_green}>GREEN</li>
        <li className={styles.tab_blue}>BLUE</li>
        <li className={styles.tab_navy}>NAVY</li>
        <li className={styles.tab_purple}>PURPLE</li>
      </ul>
    </div>
  );
};

export default Header;
