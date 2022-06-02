import { useState } from "react";
import fetchService from "../services/fetchService";
import DexNumber from "./DexNumber";
import PokeTypes from "./PokeTypes";
import styles from "./pokeInfo.module.css";
import PokeEvos from "./PokeEvos";

const PokeInfo = (props) => {
  const [pokemon, setPokemon] = useState({});

  fetchService(props.pokemon.url).then((data) => {
    if (data) {
      setPokemon(data);
    }
  });

  const navType = (typeId) => {
    props.nav({ target: "type", isLoading: true, id: typeId });
  };

  

  if (pokemon.name) {
    return (
      <>
        <div className={styles.topInfo + " " + pokemon.types[0].type.name}>
          <div className={styles.dexNumber}><DexNumber number={pokemon.id} /></div>
          <div className={styles.pokeName}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</div>
          <div className={styles.cardSprite}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        </div>

        <div className={styles.typeDiv}>
          <h2>Types</h2>
          <PokeTypes nav={navType} types={pokemon.types} namedIcons={true} />
        </div>
        <div className={styles.evoDiv}>
          <PokeEvos />
        </div>
      </>
    );
  }
};
export default PokeInfo;