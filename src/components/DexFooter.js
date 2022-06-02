import styles from "./pokeStyles.module.css";
const DexFooter = (props) => {
  return (
    <>
      <div className={styles.dexBottom}>
        <div className={styles.dexBottomScreen}>{props.children}</div>
        <div className={styles.dexBottomButton}>
          <button type="button" onClick={props.nav.bind(null,{ target: "main", isLoading: true, id: 0 })}><img src="home.png" alt="home" /></button>
        </div>
      </div>
    </>
  );
};
export default DexFooter;
