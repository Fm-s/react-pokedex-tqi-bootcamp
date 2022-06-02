import { PokeProvider } from '../contexts/pokeDB-context';
import PokeDex from './PokeDex';
import styles from "./pokeStyles.module.css";

const PokeFrame = () => {

  return <div className={styles.pokeFrame}><PokeProvider><PokeDex></PokeDex></PokeProvider></div>;
};
export default PokeFrame;
