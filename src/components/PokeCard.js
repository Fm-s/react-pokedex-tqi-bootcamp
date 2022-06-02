import { useState } from "react";
import fetchServ from "../services/fetchService";
import PokeTypes from "./PokeTypes";
import DexNumber from "./DexNumber";
import styles from "./pokeStyles.module.css";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  fetchServ(props.pokemon.url).then((data) => {
    if (data) {
      setPokemon(data);
    }
  });

  const navPoke = () => {
    props.nav({ target: "pokemon", isLoading: true, id: pokemon.id });
  };
  const navType = (typeUrl) => {
    props.nav({ target: "type", isLoading: true, url: typeUrl });
  };

  if (pokemon.name) {
    return (
      <div className={styles.cardBG + " " + pokemon.types[0].type.name}>
        <div className={styles.cardSprite} onClick={navPoke}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className={styles.cardSide}>
          <div onClick={navPoke} className={styles.cardName}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</div>
          <div className={styles.cardTypes}><PokeTypes nav={navType} types={pokemon.types} /></div>
          <div onClick={navPoke} className={styles.cardNumber }><DexNumber number={pokemon.id} /></div>
          
        </div>
      </div>
    );
  }
};
export default PokeCard;
