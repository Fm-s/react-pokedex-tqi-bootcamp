import styles from "./pokeStyles.module.css";

const DexHead = (props) => {
  return (
    <>
      <div className={styles.dexHead}>
        
          <div className={styles.bigBulb}>
            <img src="pokedex-big-bulb.png" alt="PokeBulb" />
          </div>
          <div style={{display:"flex", flexWrap: "warp"}}>
          <div className={styles.litleBulb}>
            <div style={{ backgroundColor: "#9D5959" }}></div>
          </div>
          <div className={styles.litleBulb}>
            <div style={{ backgroundColor: "#EDBF7C" }}></div>
          </div>
          <div className={styles.litleBulb}>
            <div style={{ backgroundColor: "#93AB85" }}></div>
          </div>
          </div>
        
      </div>
      <div className={styles.pokeDexText}>
        <h2>Classic Pokedex</h2>
      </div>
      <div className={styles.innerDex}>{props.children}</div>
    </>
  );
};

export default DexHead;
