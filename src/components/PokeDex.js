import { useContext, useState } from "react";
import PokeDB from "../contexts/pokeDB-context";
import DexFooter from "./DexFooter";
import DexHead from "./DexHead";
import PokeCard from "./PokeCard";
import PokeInfo from "./PokeInfo";
import styles from "./pokeStyles.module.css";

const PokeDex = () => {
  const pokeCtx = useContext(PokeDB);
  const [nav, setNav] = useState({ target: "main", isLoading: true, id: 0 });

  const navigateDex = (nav) => {
    setNav(nav);
  };

  let mainScreen = "";
  let subScreen = "";

  switch (nav.target) {
    case "pokemon":
      mainScreen = <PokeInfo nav={navigateDex} pokemon={pokeCtx.pokeList.results[nav.id-1]} />;
      subScreen = <h2>Press Home ></h2>
      break;
    case "type":
      mainScreen = <h2>Loading . . .</h2>;
      subScreen = <h2>Error(missingno) press home </h2>;
      break;
    case "main":
      if (pokeCtx.isLoading) {
        mainScreen = <h2>Loading . . .</h2>;
        subScreen = <h2>Loading . . .</h2>;
      } else {
        mainScreen = pokeCtx.pokeList.results.map((poke, index) => <PokeCard key={`PokeId_${index + 1}`} pokemon={poke} nav={navigateDex} />);
        subScreen = <h4>PokeDex</h4>;
      }
      break;
    default:
      mainScreen = <h2>Error</h2>;
      subScreen = <h2>Error</h2>;
  }

  return (
    <div className={styles.pokeDex}>
      <DexHead>{mainScreen}</DexHead>
      <DexFooter nav={navigateDex}>{subScreen}</DexFooter>
    </div>
  );
};

export default PokeDex;