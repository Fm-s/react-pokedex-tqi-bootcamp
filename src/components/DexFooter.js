import styles from "./pokeStyles.module.css";
import homeIco from "../assets/icons/home.png";
const DexFooter = (props) => {
  return (
    <>
      <div className={styles.dexBottom}>
        <div className={styles.dexBottomScreen}>{props.children}</div>
        <div className={styles.dexBottomButton}>
          <button type="button" onClick={props.nav.bind(null,{ target: "main", isLoading: true, id: 0 })}><img src={homeIco} alt="home" /></button>
        </div>
      </div>
    </>
  );
};
export default DexFooter;
